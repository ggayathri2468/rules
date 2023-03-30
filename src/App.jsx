import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
function App() {
  const [value, setValue] = useState("");

  const [helpStatus, setHelpStatus] = useState("Pending");
  const formik = useFormik({
    initialValues: {
      occupation: "",
      annual: 0,
      qualification: "",
      plot: "",
      ownLand: "",
      motherOccupation: "",
      motherAnnual: 0,
      motherQualification: "",
      motherPlot: "",
      motherOwnLand: "",
    },

    onSubmit: (values) => {
      const f = formik.values;
      console.log("f", f);
      const occupation =
        (f.motherOccupation.includes("labor") ||
          f.motherOccupation.includes("jobless")) &&
        (f.occupation.includes("labor") || f.occupation.includes("jobless"));
      console.log("occupation", occupation);
      const qualification =
        f.qualification.includes("noedu") &&
        f.motherQualification.includes("noedu");
      console.log("qual", qualification);

      const ann = f.annual < 200000 && f.motherAnnual < 200000;
      // const ann =
      //   f.annual.includes((ff) => ff < 200000) &&
      //   f.motherAnnual.includes((ff) => ff < 200000);
      console.log("ann", ann);
      const own = f.motherOwnLand.includes("no") && f.ownLand.includes("no");
      console.log("own", own);

      const plo = f.motherPlot.includes("no") && f.plot.includes("no");
      console.log("plo", plo);
      console.log("values", values);
      occupation && qualification && ann && own && plo
        ? setHelpStatus("yes")
        : setHelpStatus("no");
      console.log("help", helpStatus);
    },
  });

  const submittingValue = () => {
    const regExp = /labor|jobless/;

    occupation ? setHelpStatus("yes") : setHelpStatus("No");
    console.log("first", value, occupation);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {/* <input
        style={{ padding: "10px", borderRadius: "10px" }}
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      /> */}

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {" "}
          <h1>Father</h1>
          <select
            name="qualification"
            value={formik.values.qualification}
            onChange={formik.handleChange}
          >
            <option value="BE"> be </option>
            <option value="Btech"> tech </option>
            <option value="noedu"> No edu </option>
          </select>
          <select
            name="occupation"
            value={formik.values.occupation}
            onChange={formik.handleChange}
          >
            <option value="employed"> Employed </option>
            <option value="labor"> Labor </option>
            <option value="jobless"> No Job </option>
          </select>
          <input
            name="annual"
            type="number"
            value={formik.values.annual}
            onChange={formik.handleChange}
          />
          <select
            name="plot"
            value={formik.values.plot}
            onChange={formik.handleChange}
          >
            <option value="yes"> yes </option>
            <option value="no"> no </option>
          </select>
          <select
            name="ownLand"
            value={formik.values.ownLand}
            onChange={formik.handleChange}
          >
            <option value="yes"> yes </option>
            <option value="no"> no </option>
          </select>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <h1>Mother</h1>
          <select
            name="motherQualification"
            value={formik.values.motherQualification}
            onChange={formik.handleChange}
          >
            <option value="BE"> be </option>
            <option value="Btech"> tech </option>
            <option value="noedu"> No edu </option>
          </select>
          <select
            name="motherOccupation"
            value={formik.values.motherOccupation}
            onChange={formik.handleChange}
          >
            <option value="employed"> Employed </option>
            <option value="labor"> Labor </option>
            <option value="jobless"> No Job </option>
          </select>
          <input
            name="motherAnnual"
            type="number"
            value={formik.values.motherAnnual}
            onChange={formik.handleChange}
          />
          <select
            name="motherPlot"
            value={formik.values.motherPlot}
            onChange={formik.handleChange}
          >
            <option value="yes"> yes </option>
            <option value="no"> no </option>
          </select>{" "}
          <select
            name="motherOwnLand"
            value={formik.values.motherOwnLand}
            onChange={formik.handleChange}
          >
            <option value="yes"> yes </option>
            <option value="no"> no </option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Help Status {helpStatus}</h3>
    </>
  );
}

export default App;

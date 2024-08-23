import { useState } from "react";

function App() {
  const [role, setRole] = useState("Software Engineer(Fresher)");
  const [companyName, setCompanyName] = useState("XYZ Company");
  const [gender, setGender] = useState("Sir");
  const [email, setEmail] = useState("xyz.gmail.com");
  const messageBody = `
  I hope this email finds you well. I am writing to express my interest in the ${role} role at ${companyName}, as advertised. Please find attached my resume for your consideration. I believe I can bring valuable skills to your team. Thank you for considering my application. I look forward to the opportunity to discuss how my skills align with the needs of ${companyName}.`;
  const details = `Sincerely, Prashant 8219187294`;
  return (
    <main className="min-h-screen w-screen grid place-content-center bg-zinc-100">
      <div className="flex flex-col justify-center items-center gap-10 max-w-5xl mx-auto bg-white p-3 md:p-5 rounded-lg">
        <h1 className="text-bold text-3xl">Mail Generator</h1>
        <div className="flex flex-col gap-2 w-full text-lg">
          <input
            type="text"
            name="gender"
            value={gender}
            placeholder="Sir"
            className="items-stretch p-2 rounded-lg border-[1px]"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            name="role"
            value={role}
            placeholder="Software Engineer(Fresher)"
            className="items-stretch p-2 rounded-lg border-[1px]"
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            type="text"
            name="companyName"
            value={companyName}
            placeholder="XYZ Company"
            className="items-stretch p-2 rounded-lg border-[1px]"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="xyz.gmail.com"
            className="items-stretch p-2 rounded-lg border-[1px]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <b>Subject:</b>
          <p className="mb-10">{`Application for ${role} role`}</p>
          <p className="">{`Dear ${gender},`}</p>
          <p>{messageBody}</p>
          <p>
            <span>Please checkout my portfolio to know more</span>{" "}
            <a
              href="https://portfolio-d41i.onrender.com"
              className="text-blue-500 underline">
              https://portfolio-d41i.onrender.com
            </a>
          </p>
          <div>
            {details.split(" ").map((x, idx) => (
              <p key={idx}>{x}</p>
            ))}
            <a
              href="https://www.linkedin.com/in/prashant-kumar-867a401b7"
              className="text-blue-500 underline">
              https://www.linkedin.com/in/prashant-kumar-867a401b7
            </a>
          </div>
        </div>
        <a
          href={`mailto:${email}`}
          className="p-3 w-full bg-blue-500 text-white rounded-lg text-center font-semibold text-lg">{`Send mail to ${email}`}</a>
      </div>
    </main>
  );
}

export default App;

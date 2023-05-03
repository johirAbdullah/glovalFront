import { useNavigate, useParams } from "react-router-dom";

const AboutPage = () => {
  const goto = useNavigate();
  return (
    <div>
      <h2>about page</h2>
      hello man my company is a human seviceses agency my company sevices is free sevices , as provide your kneed day proudact with add my provide my
      suggest product ofcourse govment registri and real product verifying , my site provide proudact no scam hello man my company is a human
      seviceses agency my company sevices is free sevices , as provide your kneed day proudact with add my provide my suggest product ofcourse govment
      registri and real product verifying , my site provide proudact no scam
      <p>if you want to meet me please press the go to contact page</p>
      <button
        onClick={() => {
          goto("/contact");
        }}
      >
        go to contact page
      </button>
      <button
        onClick={() => {
          goto("/");
        }}
      >
        go to home page
      </button>
      <p>hello</p>
    </div>
  );
};
export default AboutPage;

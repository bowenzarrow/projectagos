import LeaderProfile from "../components/profile";
import leadership from "./leadershipProfiles";
import "./pages-css/about.css";

export const About: React.FC = () => {
  return (
    <div className="about-container">
      <video className="background-vid" autoPlay loop muted playsInline>
        <source src="/back2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Project Agos's initiative works to protect our Earth’s waterways by effectively reducing the main cause of aquatic contamination: pollution.
          Through service work like trash cleanups near water, and installations of mesh filters on storm drains, we target waterway pollution at its source—
          before it can reach rivers, and eventually, the ocean.
        </p>
      </section>

      <h1 className="team-heading">Meet the Team!</h1>

      <div className="grid-layout mb-12">
        {leadership.map((leader) => (
          <LeaderProfile
            key={leader.name}
            name={leader.name}
            position={leader.position}
            schoolgrade={leader.schoolgrade}
            image={leader.image}
            fontsize={leader.fontsize}
          />
        ))}
      </div>
    </div>
  );
};

export default About;

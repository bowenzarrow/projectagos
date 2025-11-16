import "./components-css/profile.css";

interface LeaderProfileProps {
  name: string;
  position?: string;
  schoolgrade?: string;
  image: string;
  fontsize?: string;
  description?: string;
}

export type LeaderProfilePropsList = LeaderProfileProps[];

const LeaderProfile = ({
  name,
  position,
  schoolgrade,
  image,
  fontsize,
  description,
}: LeaderProfileProps) => {
  let size = "lg:text-2xl text-lg";
  console.log(fontsize);
  if (fontsize) size = fontsize;

  return (
    <div className="leader-card">
      <img
        className="leader-img"
        src={image}
        alt={name}
      />
      <h2 className="leader-name" style={{ fontSize: size }}>{name}</h2>
      {position && <p className="leader-position">{position}</p>}
      {schoolgrade && <p className="leader-grade">{schoolgrade}</p>}
      {description && <p className="leader-description">{description}</p>}
    </div>
  );
};

export default LeaderProfile;

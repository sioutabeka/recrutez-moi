import logo from "../../assets/logo-recrutez-essia.png";

export default function Loader({ done }) {
  return (
    <div className={"loader " + (done ? "loader--done" : "")}>
      <div className="loader__inner">
        <img src={logo} alt="Essia Ben Kheder" className="loader__logo" />
        <div className="loader__bar"><i /></div>
      </div>
    </div>
  );
}

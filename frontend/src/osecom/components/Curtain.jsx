import logo from "../../assets/logo-recrutez-essia.png";

export default function Curtain({ on }) {
  return (
    <div className={"curtain " + (on ? "is-on" : "")}>
      <img src={logo} alt="" className="curtain__logo" />
    </div>
  );
}

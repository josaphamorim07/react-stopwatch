import "./styles.scss";
interface props {
  texto?: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?:()=>void;
}

const Button = ({ onClick, texto,type}: props) => {
  return <button className="botao"  type={type} onClick={onClick}  >{texto}</button>;
};

export default Button;

import './footer.css';
const dt = new Date();
const year = dt.getFullYear();
export const Footer = () => {
    return (<p className="Copy">CopyrightÂ©{year} </p>)
}
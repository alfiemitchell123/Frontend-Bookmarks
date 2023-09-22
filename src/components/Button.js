const Button = ({ label, className }) => {
    return (
        <div>
            <button className={`px-4 py-3.5 rounded font-semibold shadow-md active:bg-white hover:bg-opacity-90 ${className}`}>{label}</button>
        </div>
    )
}

export default Button;
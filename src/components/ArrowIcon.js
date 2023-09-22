export const ArrowIcon = ({ arrowColor, rotate }) => (
    <div className="inline">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            className={`inline ${rotate}`}
        >
            <path fill="none" stroke={arrowColor} stroke-width="3" d="M1 1l8 8 8-8" />
        </svg>
    </div>
)
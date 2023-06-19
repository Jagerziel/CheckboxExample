// Import Components

// Import CSS
import "./Checkbox.scss";

// Export YearMonthToggle Function
export default function Checkbox( { instanceKey, instanceCheckbox, description } ) {
    // Return Div for CheckboxToggle Container
    return (
        <div className="CheckboxToggle-container">
            <div className="Checkbox-switch-button">
                <input 
                    className="Checkbox-input" type="checkbox" id="todo" name="todo" value="todo"
                    disabled={true}
                    checked={instanceCheckbox[instanceKey]}
                ></input>
                <label className="Checkbox-label" data-content={description}>{description}</label>
            </div>
        </div>
    );
}
// Import Components

// Import CSS
import "./Checkbox.scss";

// Export YearMonthToggle Function
export default function Checkbox( { instanceKey, instanceCheckbox, setInstanceCheckbox, description } ) {
    //Function toggle() triggers onClick toggling the object with the instanceKey key between Monthly and Annual
    function toggle () {
        if (instanceCheckbox[instanceKey] === true) {
            setInstanceCheckbox({...instanceCheckbox, [instanceKey] : false})
        } else {
            setInstanceCheckbox({...instanceCheckbox, [instanceKey] : true})
        }
    }
    // console.log(instanceCheckbox)

    // Return Div for CheckboxToggle Container
    return (
        <div className="CheckboxToggle-container">
            <div className="Checkbox-switch-button" 
            onChange={() => {toggle()}}>
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
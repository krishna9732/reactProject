import './product.css';
import React from "react";
import ReactFormValidation from "react-form-input-validation";

class ProductDetails extends React.Component{
            constructor(props) {
                super(props);
                this.state = {
                fields: {
                    cc_name: "",
                    cc_no: "",
                    ccv: "",
                    phone_number: "",
                    expdate: ""
                },
                errors: {}
                };
                this.form = new ReactFormValidation(this, { locale: "en" });
                this.form.useRules({
                cc_name: "required|username_available|min:8|max:16",
                cc_no: "required|numeric|min:16|max:16",
                ccv: "required|numeric|digits_between:3,4",
                phone_number: "required|numeric|digits_between:10,12",
                expdate: "required|numeric|/"
                });
            
                this.form.onformsubmit = (fields) => {
                console.log(fields);
                };
            
                ReactFormValidation.registerAsync("username_available", function (
                username,
                attribute,
                req,
                passes
                ) {
                setTimeout(() => {
                    if (username === "foo")
                    passes(false, "Username has already been taken.");
                    // if username is not available
                    else passes();
                }, 1000);
                });
            }
    
















            
      render() {
        return (
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>Registration Form</h2>
            <form
              className="myForm"
              noValidate
              autoComplete="off"
              onSubmit={this.form.handleSubmit}
            >
              <label>Credit Card Username:</label>
              <input
                type="text"
                name="cc_name"
                placeholder="CC username"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.cc_name}
                data-attribute-name="cc username"
                data-async
              />
              <label className="error">
                {this.state.errors.cc_name ? this.state.errors.cc_name : ""}
              </label>
    
              <label>Credit Card Number:</label>
              <input
                type="text"
                name="cc_no"
                placeholder="CC number"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.cc_no}
                data-attribute-name="cc number"
                data-async
              />
              <label className="error">
                {this.state.errors.cc_no ? this.state.errors.cc_no : ""}
              </label>
    
              <label>Credit Card Verification:</label>
              <input
                type="text"
                name="ccv"
                placeholder="CCV"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.ccv}
                data-attribute-name="CC verify number"
                data-async
              />
              <label className="error">
                {this.state.errors.ccv ? this.state.errors.ccv : ""}
              </label>
    
              <label>Expiration Date:</label>
              <input
                type="text"
                name="expdate"
                placeholder="mm/yy"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.expdate}
                data-attribute-name="Expiration Date"
                data-async
              />
              <label className="error">
                {this.state.errors.expdate ? this.state.errors.expdate : ""}
              </label>
    
              <p>
                <label>
                  Country:
                  <select
                    id="country"
                    name="country"
                    value={this.state.fields.country}
                    onChange={this.form.handleChangeEvent}
                    onBlur={this.form.handleBlurEvent}
                    data-attribute-name="Country"
                    data-async
                  >
                    <option value="">Select one</option>
                    <option value="pak">West Bengal</option>
                    <option value="kor">Goa</option>
                    <option value="tur">Gujrat</option>
                  </select>
                </label>
                <label className="error">
                  {this.state.errors.country ? this.state.errors.country : ""}
                </label>
              </p>
              <br />
              <button type="submit">Back</button>
              <button type="submit">Register</button>
            </form>
          </div>
        );
      }
}

export default ProductDetails;
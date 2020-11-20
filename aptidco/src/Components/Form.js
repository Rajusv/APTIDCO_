import React,{Component} from 'react';

class Form extends React.Component
{
   render()
   {
       return(
        <div><div className="wrapper">
        <div id="loader" />
       
        <div className="content-wrapper">
          <div className="container-full">
          
            <div className="content-header">
              <div className="d-flex align-items-center">
              </div>
            </div>	  
           
            <section className="content">
            
              <div className="box box-default">
                <div className="box-header with-border">
                  <h4 className="box-title">Beneficiary Details</h4>
                </div>
              
                <div className="box-body wizard-content">
                  <form action="#" className="validation-wizard wizard-circle">
                  
                    <h6>Beneficiary Details</h6>
                    <section>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="wlocation2"> District <span className="danger">*</span> </label>
                            <select className="custom-select form-control required" id="wlocation2" name="location">
                              <option value>Select </option>
                              <option value="India">Nellore</option>
                              <option value="USA">Guntur</option>
                              <option value="Dubai">West Godavari</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="wlocation2"> District <span className="danger">*</span> </label>
                            <select className="custom-select form-control required" id="wlocation2" name="location">
                              <option value>Select</option>
                              <option value="India">Nellore</option>
                              <option value="USA">Guntur</option>
                              <option value="Dubai">West Godavari</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div>
                        <h4>Identification Details:</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="wfirstName2"> AADHAR NUMBER  <span className="danger">*</span> </label>
                            <input type="text" className="form-control required" id="AADHAR" name="firstName" /> </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="wlastName2">PMAY BENEFICIARY CODE <span className="danger">*</span> </label>
                            <input type="text" className="form-control required" id="wfirstName2" name="PMAY" /> </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="wemailAddress2">PMAY SURVEY CODE  <span className="danger">*</span> </label>
                            <input type="text" className="form-control required" id="wfirstName2" name="PMAY SURVEY CODE" /> </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="wemailAddress2">NAVARATNALU CODE   <span className="danger">*</span> </label>
                            <input type="text" className="form-control required" id="wfirstName2" name="NAVARATNALU CODE" /> </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="wemailAddress2">COMPONENT NAME  <span className="danger">*</span> </label>
                            <input type="email" className="form-control required" id="wemailAddress2" name="emailAddress" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="wlocation2"> Category <span className="danger">*</span> </label>
                            <select className="custom-select form-control required" id="wlocation2" name="location">
                              <option value>Select</option>
                              <option value="India">300.sft</option>
                              <option value="USA">350.sft</option>
                              <option value="Dubai">430.sft</option>
                            </select>
                          </div>
                        </div>
                      </div></section>
               
                    <h6>Beneficiary Contribution Payment Details</h6>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="jobTitle3">Company Name :</label>
                            <input type="text" className="form-control required" id="jobTitle3" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="webUrl3">Company URL :</label>
                            <input type="url" className="form-control required" id="webUrl3" name="webUrl3" /> </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="shortDescription3">Short Description :</label>
                            <textarea name="shortDescription" id="shortDescription3" rows={6} className="form-control" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </section>
                   
                    <h6>Allotment</h6>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="wint1">Interview For :</label>
                            <input type="text" className="form-control required" id="wint1" /> </div>
                          <div className="form-group">
                            <label htmlFor="wintType1">Interview Type :</label>
                            <select className="custom-select form-control required" id="wintType1" data-placeholder="Type to search cities" name="wintType1">
                              <option value="Banquet">Normal</option>
                              <option value="Fund Raiser">Difficult</option>
                              <option value="Dinner Party">Hard</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="wLocation1">Location :</label>
                            <select className="custom-select form-control required" id="wLocation1" name="wlocation">
                              <option value>Select City</option>
                              <option value="India">India</option>
                              <option value="USA">USA</option>
                              <option value="Dubai">Dubai</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="wjobTitle4">Interview Date :</label>
                            <input type="date" className="form-control required" id="wjobTitle4" />
                          </div>
                          <div className="form-group">
                            <label>Requirements :</label>
                            <input name="group2" type="radio" id="radio_3" defaultValue={1} />
                            <label htmlFor="radio_3" className="d-block">Employee</label>
                            <input name="group2" type="radio" id="radio_4" defaultValue={1} />
                            <label htmlFor="radio_4">Contract</label>
                          </div>
                        </div>
                      </div>
                    </section>
                 
                    <h6>Step 4</h6>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="behName3">Behaviour :</label>
                            <input type="text" className="form-control required" id="behName3" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="participants3">Confidance</label>
                            <input type="text" className="form-control required" id="participants3" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="participants4">Result</label>
                            <select className="custom-select form-control required" id="participants4" name="location">
                              <option value>Select Result</option>
                              <option value="Selected">Selected</option>
                              <option value="Rejected">Rejected</option>
                              <option value="Call Second-time">Call Second-time</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="decisions2">Comments</label>
                            <textarea name="decisions" id="decisions2" rows={4} className="form-control" defaultValue={""} />
                          </div>
                          <div className="form-group">
                            <label>Rate Interviwer :</label>
                            <div className="c-inputs-stacked">
                              <input type="checkbox" id="checkbox_6" />
                              <label htmlFor="checkbox_6" className="d-block">1 star</label>
                              <input type="checkbox" id="checkbox_7" />
                              <label htmlFor="checkbox_7" className="d-block">2 star</label>
                              <input type="checkbox" id="checkbox_8" />
                              <label htmlFor="checkbox_8" className="d-block">3 star</label>
                              <input type="checkbox" id="checkbox_9" />
                              <label htmlFor="checkbox_9" className="d-block">4 star</label>
                              <input type="checkbox" id="checkbox_10" />
                              <label htmlFor="checkbox_10" className="d-block">5 star</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </form>
                </div>         
              </div>
           
            </section>
            
          </div>
        </div>
       
      </div>
      
        
          
          
              </div>
       )
   }
}
export default Form
import React,{Component} from 'react'
const apartmentUrl = "http://localhost:3005/apartments";
class Home extends Component{
    addNewApartment =(e) =>{
        e.preventDefault();
        let apartment = {};
        const formData = new FormData(e.target);
        for (let entry of formData.entries()) {
            apartment[entry[0]] = entry[1];
        }
        this.addApartmentInDB(apartment)
    };


    addApartmentInDB = (apartment) =>{
        return fetch(apartmentUrl, {
            method: "POST",
            body: JSON.stringify({
                entity: apartment
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };


    render(){
        return(
          <div>
              <h2>Home</h2>
              <form onSubmit={this.addNewApartment.bind(this)} id="addNewForm">
                  <div className="form-group col-md-6">
                      <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation: </label>
                      <select required
                              className="sel custom-select "
                              id="accommodation"
                              name="accommodation">
                          <option value="SGL">SGL</option>
                          <option value="DGL">DGL</option>
                      </select>
                  </div>
                  <div className="form-group col-md-6">
                      <label className="mr-2" htmlFor="apartmentComfortType">Comfort: </label>
                      <select required
                              className="required sel custom-select "
                              id="comfort"
                              name="comfort">
                          <option value="ECONOM">ECONOM</option>
                          <option value="STANDART">STANDART</option>
                          <option value="LUX">LUX</option>
                      </select>
                  </div>
                  <button type="submit" className="btn">AddNewApartment

                  </button>
              </form>
          </div>
        );
    }
}

export default Home;
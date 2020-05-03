
class Customer {
    id;
    name;
    state;

    print() {
        console.log(this.id, this.name, this.state);
    }

    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
}

let cust1 = new Customer(1, "Amazon", "WA");
let cust2 = new Customer(2, "Target", "MN");
let cust3 = new Customer(3, "Walmart", "AR");

let custs = [cust1, cust2, cust3];

const bodyLoaded = () => {
    let tbody = document.getElementById("tbody");
    for (let cust of custs) {
        let tr = `<tr><td>${cust.id}</td>
                      <td>${cust.name}</td>
                      <td>${cust.state}</td>
                  </tr>`;
                  tbody.innerHTML += tr;
    }    
}
const addCustomer = () => {
    let custId = (document.getElementById("tid").value);
    let custName = (document.getElementById("tname").value);
    let custState = (document.getElementById("tstate"));
    let cust = new Customer(id, name, state);
        custs.push(cust);
        display();
}
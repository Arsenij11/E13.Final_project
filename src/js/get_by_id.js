const form = document.getElementById('form');

form.onsubmit = function () {
    const pk = document.getElementById('pk').value;
    console.log(pk);
    if (pk === 'all'){
        get_all();
    }
    else {
        get_contact(pk);
    }
    return false;
}



function get_contact (pk) {
    let has_error = false;

    fetch(`http://localhost:3000/contacts/${pk}`).
    catch((error) => {
        console.log(error);
        has_error = true;
    }).
    then((response) => {
        if (!has_error) {
            return response.json();
        } else {
            return false;
        }
    }).
    then((json) => {
        if (json) {
            const tbody = document.querySelector('tbody');

            const trs = tbody.children;
            for (let t of trs) {
                t.style.display = 'none';
            }


            const tr = document.createElement('tr');

            const id = document.createElement('td');
            id.innerHTML = json['id'];
            tr.appendChild(id);

            const name = document.createElement('td');
            name.innerHTML = json['name'];
            tr.appendChild(name);

            const email = document.createElement('td');
            email.innerHTML = json['email'];
            tr.appendChild(email);

            const phone_number = document.createElement('td');
            phone_number.innerHTML = json['phone_number'];
            tr.appendChild(phone_number);

            tbody.appendChild(tr);
        }
    })
}


function get_all () {
    let has_error = false;

    fetch('http://localhost:3000/contacts').
    catch((error)=> {
        console.log(error);
        has_error = true;
    }).
    then((response)=> {
        if (!has_error) {
            return response.json();
        }
        else {
            return [];
        }
    }).
    then((json)=>{
        if (json.length > 0) {
            const tbody = document.querySelector('tbody');
            const trs = tbody.children;
            for (let t of trs) {
                t.style.display = 'none';
            }
            for (let j of json) {
                const tr = document.createElement('tr');

                const id = document.createElement('td');
                id.innerHTML = j['id'];
                tr.appendChild(id);

                const name = document.createElement('td');
                name.innerHTML = j['name'];
                tr.appendChild(name);

                const email = document.createElement('td');
                email.innerHTML = j['email'];
                tr.appendChild(email);

                const phone_number = document.createElement('td');
                phone_number.innerHTML = j['phone_number'];
                tr.appendChild(phone_number);

                tbody.appendChild(tr);

            }
        }
    })
}
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
            for (let j of json) {
                const tbody = document.querySelector('tbody');
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

                const select = document.querySelector('select');
                const option = document.createElement('option');
                option.innerHTML = j['id'];
                option.setAttribute('value', j['id']);
                select.appendChild(option);
            }
        }
})
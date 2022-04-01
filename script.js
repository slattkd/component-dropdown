const banner = document.getElementById('alert');
const alert = banner.querySelector('.alert-message');
const dropdown = banner.querySelector('.dropdown');

const alertColor = '#3c3c3c';
const textLight = true;
const alertMessage = 'This is the alert message!';
const dropdownMessage = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt impedit cumque sint veniam, modi maiores totam facilis consequuntur obcaecati voluptatum expedita tenetur iure eos, molestiae doloribus ullam voluptatibus? Quam, labore?';
const dropdownIsOpen = false;

alert.innerHTML = alertMessage;
banner.style.background = alertColor;
if (textLight) {
	banner.style.color = 'white';
} else {
	banner.style.color = 'black';
}

dropdown.innerHTML = dropdownMessage;

alert.addEventListener('click', function() {
	dropdown.classList.toggle('is-open');
	alert.classList.toggle('icon-down');
})


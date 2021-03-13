const team = [

{
  rank: 1,
  name: 'Fargentorm',
  handle: 'Skolgar#9821',
  img: 'https://cdn.discordapp.com/avatars/202484085417836544/a_dca2d549e97425676de1f4a93ffabc5b.png?size=1024',
  kudos: '50.000'},
{
  rank: 2,
  name: 'Poivrot',
  handle: 'Elo-Sama#5296',
  img: 'https://cdn.discordapp.com/avatars/320362714453245954/434459be0190195fca869def61e34e70.png?size=1024',
  kudos: '10.000'},
{
  rank: 3,
  name: 'DJ Kebo',
  handle: 'gidor#8217',
  img: 'https://cdn.discordapp.com/avatars/389153519204302858/9e3868f66b5513b46c7e0036bb0ec7bf.webp?size=1024',
  kudos: '10.000'},
{
  rank: 4,
  name: 'Skern',
  handle: 'BlaK_EYED#6302',
  img: 'https://cdn.discordapp.com/avatars/663759628848463902/723b8333cab8b2ad64c0dc963b051c9d.png?size=1024',
  kudos: '500'}];


team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					  <a class="c-media__link u-text--small" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong>
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


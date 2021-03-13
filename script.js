const team = [

{
  rank: 1,
  name: 'Thomas',
  handle: 'Sawyer#3302',
  img: 'https://cdn.discordapp.com/avatars/347105684573126678/582bc6bd88a90fe469f0cca9a6d9273c.png?size=1024',
  kudos: '100.000'},
{
  rank: 2,
  name: 'Alice',
  handle: '💖𝓞𝓬𝓮𝓪𝓷𝓮💖#0001',
  img: 'https://cdn.discordapp.com/avatars/670545673262727171/a_0724a70d93399bda78288c0cb8e72a62.png?size=1024',
  kudos: '77.600'},
{
  rank: 3,
  name: 'Fargentorm',
  handle: 'Skolgar#9821',
  img: 'https://cdn.discordapp.com/avatars/202484085417836544/a_dca2d549e97425676de1f4a93ffabc5b.png?size=1024',
  kudos: '50.000'},
{
  rank: 4,
  name: 'Coène',
  handle: 'ritri#4180',
  img: 'https://cdn.discordapp.com/avatars/349157443973939201/8d06d6dc9047ed6527ece78d1fbf68f8.png?size=1024',
  kudos: '24.000'},
{
  rank: 5,
  name: 'Poivrot',
  handle: 'Elo-Sama#5296',
  img: 'https://cdn.discordapp.com/avatars/320362714453245954/434459be0190195fca869def61e34e70.png?size=1024',
  kudos: '20.000'},
{
  rank: 5,
  name: 'Abatartufum',
  handle: '𝑳𝒆𝒌𝒌#6269',
  img: 'https://cdn.discordapp.com/avatars/295561334332981253/87803008326ed10648b104389273d628.png?size=1024',
  kudos: '20.000'},
{
  rank: 6,
  name: 'Bob',
  handle: 'Le Gnome®#1917',
  img: 'https://cdn.discordapp.com/avatars/411170233726795778/a_07ea1954a26a9204df684e153f497b3b.png?size=1024',
  kudos: '12.000'},
{
  rank: 7,
  name: 'DJ Kebo',
  handle: 'gidor#8217',
  img: 'https://cdn.discordapp.com/avatars/389153519204302858/9e3868f66b5513b46c7e0036bb0ec7bf.webp?size=1024',
  kudos: '10.000'},
{
  rank: 7,
  name: 'Thibault',
  handle: 'Thibault#3361',
  img: 'https://cdn.discordapp.com/avatars/179732948826718218/fb12df2e560d9818e6e0218eca06b285.png?size=1024',
  kudos: '10.000'},
{
  rank: 8,
  name: 'Abdel',
  handle: 'Maro ツ#2860',
  img: 'https://cdn.discordapp.com/avatars/497805073540448268/a_0ce90dbdc0f1c912e5aef2e592933190.png?size=1024',
  kudos: '5.000'},
{
  rank: 8,
  name: 'Tessa',
  handle: 'Le Gnome®#1917',
  img: 'https://cdn.discordapp.com/avatars/411170233726795778/a_07ea1954a26a9204df684e153f497b3b.png?size=1024',
  kudos: '5.000'},
{
  rank: 9,
  name: 'Arbiter',
  handle: 'Non-précisé',
  img: 'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/point1.jpg?itok=jGTH8XuS',
  kudos: '4.000'},
{
  rank: 10,
  name: 'Skern',
  handle: 'BlaK_EYED#6302',
  img: 'https://cdn.discordapp.com/avatars/663759628848463902/723b8333cab8b2ad64c0dc963b051c9d.png?size=1024',
  kudos: '500'},
{
  rank: 11,
  name: 'Hooch Gémal',
  handle: 'shinezeo_siiji#3007',
  img: 'https://cdn.discordapp.com/avatars/226664730981302272/7c8a6366472eb97d669842a12791cf45.png?size=1024',
  kudos: '100'}];


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


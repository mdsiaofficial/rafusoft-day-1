// const toolLIst = [
//   { 
//     title: "Zaawansowana ochrona Stacji roboczych", 
//     img: "./assets/icons/icons8-computer-50.png" },
//   { 
//     title: "Dwa silniki antywirusowe", 
//     img: "./assets/icons/icons8-computer-50.png" },
//   { 
//     title: "Mechanizm SafeStorage", 
//     img: "./assets/icons/icons8-computer-50.png" },
//   { 
//     title: "Kontrola dostępu", 
//     img: "./assets/icons/icons8-computer-50.png" },
//   { 
//     title: "Dwukierunkowa zapora sieciowa", 
//     img: "./assets/icons/icons8-computer-50.png" },
//   { 
//     title: "Zarządzanie bezpieczeństwem", 
//     img: "./assets/icons/icons8-computer-50.png" },
// ];

// const elements = (
//   <div>
//     {toolLIst.map((item, index) => (
//       <div key={index} class="tools">
//         <img src={item.img} alt={item.title}/>
//         <h1>{item.title}</h1>
//       </div>
//     ))}
//   </div>
// );

const toolsSection = document.querySelector('.site-tools');

const toolsData = [
  {
    icon: './assets/icons/icons8-computer-50.png',
    title: 'Zaawansowana ochrona'
  },
  {
    icon: './assets/icons/icons8-shield-50.png',
    title: 'Ochrona przed złośliwym oprogramowaniem'
  },
  {
    icon: './assets/icons/icons8-firewall-50.png',
    title: 'Zapora sieciowa'
  }
];

toolsData.forEach((tool) => {
  const toolElement = document.createElement('div');
  toolElement.classList.add('tools');
  toolElement.innerHTML = `
    <img src="${tool.icon}" alt="">
    <h1>${tool.title}</h1>
  `;
  toolsSection.appendChild(toolElement);
});

const alas = document.getElementById("inputAlas");
const Tinggi = document.getElementById("inputTinggi");
const Count = document.getElementById("LuasSubmit");
const output = document.getElementById("output");
const clear = document.querySelector(".clearSubmit");
const LuasId = document.getElementById("LuasId");

Count.addEventListener("click", function (e) {
  e.preventDefault();
  let a = alas.value;
  let t = Tinggi.value;
  let luas = (a * t) / 2;

  output.innerHTML = `Hasil luas segitiga dari Alas ${a} cm dan tinggi ${t}cm adalah ${luas} cm`;

  clear.addEventListener("click", function (e) {
    removeNode();
    e.preventDefault();
  });
  return output;
});

function removeNode() {
  const parent = output.parentNode;
  parent.removeChild(output);
  console.log("data relah dihapus");
}

const Adown = document.getElementById("inputA");
const Bright = document.getElementById("inputB");
const Cleft = document.getElementById("inputC");
const Sisi = document.getElementById("KelilingSubmit");
const text = document.getElementById("text");
const Delete = document.querySelector('.Delete')

Sisi.addEventListener("click", function (e) {
  e.preventDefault();
  let a = parseInt(Adown.value);
  let b = parseInt(Bright.value);
  let c = parseInt(Cleft.value);
  let Keliling = (a + b + c);

  text.innerHTML = `Hasil keliling segitiga dari A ${a}cm + B ${b}cm + C ${c}cm adalah ${Keliling}cm`;
    Delete.addEventListener("click", function (e) {
      deleteNode();
      e.preventDefault();
    alert('apakah yakin dihapus refresh halaman lagi')
  });
});


function deleteNode() {
    const parentEl = text.parentNode;
    parentEl.removeChild(text);
    console.log("data relah dihapus");
  }

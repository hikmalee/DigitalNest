const data={1:{label:"BULAN 01 · MINGGU 1–4",title:"Fondasi Digital & Konten Organik",outcome:"Riset pasar, materi promosi, kalender konten, dan laporan kampanye organik.",modules:[["M1","Digital Marketing Fundamental, Riset Pasar & AI","Riset 3 kompetitor, 2 buyer persona, dan marketing funnel.","FONDASI"],["M2","Content Marketing, Copywriting & Desain","Formula AIDA/PAS, Canva, storytelling, dan pilar konten.","KONTEN"],["M3","Organic Social Media & Video Pendek","Kalender konten, video pendek, insight, dan komunitas.","PRAKTIK"],["M4","Mini-Project 1: Kampanye Organik","Eksekusi kampanye, evaluasi reach dan engagement, serta laporan.","PROYEK"]]},2:{label:"BULAN 02 · MINGGU 5–8",title:"Iklan Berbayar, Landing Page & Analitik",outcome:"Simulasi kampanye iklan, draft landing page, dashboard analitik, dan laporan paid campaign.",modules:[["M5","Meta Ads & TikTok Ads","Struktur kampanye, targeting audiens, anggaran, dan A/B testing.","IKLAN"],["M6","Landing Page, SEO & Follow-up","Landing page, SEO dasar, CTA, listing marketplace, dan pesan follow-up.","OPTIMASI"],["M7","Marketing Analytics, CRO & Google Ads Dasar","CTR, CPC, CPM, CPA, conversion rate, ROAS, dan dashboard.","ANALITIK"],["M8","Mini-Project 2: Kampanye Iklan Berbayar","Simulasi/eksekusi kampanye, optimasi, dan evaluasi performa.","PROYEK"]]},3:{label:"BULAN 03 · MINGGU 9–12",title:"Proyek Nyata, Sertifikasi & Persiapan Karier",outcome:"Capstone project, laporan akhir, profil siap kerja, CV ATS, dan portofolio digital.",modules:[["M9","Capstone Part 1: Riset & Strategi","Briefing mitra, audit digital, KPI, anggaran, dan proposal kampanye.","CAPSTONE"],["M10","Capstone Part 2: Eksekusi & Pelaporan","Menjalankan kampanye, optimasi, laporan akhir, dan presentasi.","CAPSTONE"],["M11","Review, Sertifikasi & Uji Kompetensi","Review materi, simulasi ujian, dan proses uji kompetensi.","ASESMEN"],["M12","Career Prep & Job Matching","CV ATS, LinkedIn, portofolio, simulasi wawancara, dan sesi matching.","KARIER"]]}};const list=document.querySelector("#moduleList");function render(m){const d=data[m];document.querySelector("#monthLabel").textContent=d.label;document.querySelector("#monthTitle").textContent=d.title;document.querySelector("#moduleCount").textContent=d.modules.length+" modul";document.querySelector("#outcomeText").textContent=d.outcome;list.innerHTML=d.modules.map(x=>`<div class="module-row"><span class="week">${x[0]}</span><div><b>${x[1]}</b><small>${x[2]}</small></div><span class="type">${x[3]}</span></div>`).join("");document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",+t.dataset.month===m))}document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>render(+t.dataset.month)));render(1);const dlg=document.querySelector("#formDialog");document.querySelectorAll(".open-form").forEach(b=>b.addEventListener("click",()=>dlg.showModal()));document.querySelector("#closeForm").addEventListener("click",()=>dlg.close());document.querySelector("#menuBtn").addEventListener("click",()=>document.querySelector("#nav").classList.toggle("open"));document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#nav").classList.remove("open")));const toast=document.querySelector("#toast");
document.querySelector("#interestForm").addEventListener("submit",e=>{
  e.preventDefault();
  const n=document.querySelector("#pname").value.trim();
  const email=document.querySelector("#pemail").value.trim();
  const bg=document.querySelector("#background").value;
  // Demo only: never store the entered password.
  localStorage.setItem("digitalnest_demo_user",JSON.stringify({name:n,email:email,background:bg,createdAt:new Date().toISOString()}));
  // Open synchronously during the user submit action to avoid popup blockers.
  const tab=window.open("dashboard.html","_blank");
  dlg.close();
  e.target.reset();
  if(!tab){
    toast.textContent="Akun demo dibuat, tetapi tab baru diblokir browser. Izinkan pop-up lalu coba daftar kembali.";
  }else{
    toast.textContent=`Akun demo siap, ${n}. Ruang belajar dibuka di tab baru.`;
  }
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),4500);
});
const lessonDlg=document.querySelector("#lessonDialog");
const lessonBtn=document.querySelector("#lessonBtn");
if(lessonBtn&&lessonDlg){lessonBtn.addEventListener("click",()=>lessonDlg.showModal());document.querySelector("#closeLesson").addEventListener("click",()=>lessonDlg.close());}

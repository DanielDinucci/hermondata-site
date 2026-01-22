(function(){
  const grid = document.getElementById('contactGrid');
  if(!grid) return;

  const wa = grid.getAttribute('data-whatsapp');
  const li = grid.getAttribute('data-linkedin');
  const em = grid.getAttribute('data-email');

  const waLink = document.getElementById('waLink');
  const liLink = document.getElementById('liLink');
  const emLink = document.getElementById('emLink');
  const ctaBtn = document.getElementById('ctaBtn');

  if(waLink) waLink.href = wa;
  if(liLink) liLink.href = li;
  if(emLink) emLink.href = em;
  if(ctaBtn) ctaBtn.href = wa || li || em || '#contato';

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();

// Scroll reveal animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));


// --- Language (pt-BR / en-US) via URL param ?lang=pt-BR or ?lang=en-US ---
const I18N = {"pt-BR": {"nav_services": "Serviços", "nav_method": "Método", "nav_cta": "Falar agora", "pill": "Entrega rápida • Qualidade enterprise • Governança", "h1_line1": "Salesforce do <span class=\"accent\">planejamento</span> à <span class=\"accent\">execução</span>,", "h1_line2": "com um <span class=\"accent\">visual</span> e uma <span class=\"accent\">operação</span> à altura do seu negócio.", "hero_sub": "Implementações, melhorias e sustentação com foco em performance, segurança, automação e dados. A Hermon Data integra estratégia, arquitetura e entrega — sem ruído.", "btn_qr": "Ver contatos com QR", "btn_services": "Explorar serviços", "chip_admin": "Admin & Dev", "chip_clouds": "Sales Cloud • Service Cloud", "chip_dev": "Flows • Apex • LWC", "chip_int": "Integrações • APIs", "panel_title": "Resumo de entrega", "kpi_lead_label": "Lead time", "kpi_lead_value": "&lt; 2 semanas", "kpi_lead_note": "para primeiros ganhos", "kpi_quality_label": "Qualidade", "kpi_quality_value": "padrão enterprise", "kpi_quality_note": "revisões, testes e docs", "kpi_gov_label": "Governança", "kpi_gov_value": "segurança + escala", "kpi_gov_note": "boas práticas e auditoria", "mini_title": "O que você recebe", "mini_li1": "Arquitetura + backlog priorizado", "mini_li2": "Entrega incremental (sprints)", "mini_li3": "Documentação e handover", "mini_li4": "Monitoramento e melhoria contínua", "sec_services_title": "Serviços", "sec_services_desc": "Escolha o que faz sentido agora. Nós estruturamos para evoluir sem refazer tudo depois.", "svc1_title": "Implementação & Setup", "svc1_desc": "Do zero ao go-live: objetos, permissões, automações, pipelines e validações.", "svc1_li1": "Sales / Service Cloud", "svc1_li2": "Perfis, Permission Sets, Sharing", "svc1_li3": "Modelo de dados e governança", "svc2_title": "Automação & UX", "svc2_desc": "Processos fluindo: Flows bem desenhados, telas rápidas e experiência simples.", "svc2_li1": "Flow builder (padrão ouro)", "svc2_li2": "Validações inteligentes", "svc2_li3": "Componentes LWC quando necessário", "svc3_title": "Integrações & Dados", "svc3_desc": "Integre sistemas com rastreabilidade, segurança e observabilidade.", "svc3_li1": "APIs REST/SOAP, Platform Events", "svc3_li2": "MuleSoft / integrações custom", "svc3_li3": "Qualidade de dados e ETL", "svc4_title": "Sustentação & Otimização", "svc4_desc": "Melhoria contínua: performance, auditoria, backlog e SLAs claros.", "svc4_li1": "Revisão de arquitetura", "svc4_li2": "Monitoramento e correções", "svc4_li3": "Roadmap trimestral", "sec_method_title": "Método de trabalho", "sec_method_desc": "Clareza e previsibilidade — com entrega incremental e comunicação objetiva.", "step1_title": "Diagnóstico", "step1_desc": "Entendimento do negócio, dor real, riscos, e o que gera ganho rápido.", "step2_title": "Arquitetura & Backlog", "step2_desc": "Desenho do alvo, definição de padrões, e priorização com ROI.", "step3_title": "Entrega incremental", "step3_desc": "Sprints com validação do usuário, testes e documentação.", "step4_title": "Handover & Evolução", "step4_desc": "Treinamento, governança e melhoria contínua com métricas.", "sec_contact_title": "Contato (com QR Code)", "sec_contact_desc": "Escaneie e fale direto. Também deixamos o link por escrito para facilitar no desktop.", "c_wa_title": "WhatsApp", "c_wa_sub": "Resposta rápida", "contact_wa_btn": "Abrir WhatsApp", "c_li_title": "LinkedIn", "c_li_sub": "Empresa e cases", "contact_li_btn": "Visitar LinkedIn", "c_em_title": "E-mail", "c_em_sub": "Propostas e projetos", "contact_em_btn": "Enviar e-mail", "foot_title": "Pronto para começar?", "foot_sub": "Envie sua necessidade e retornamos com um plano claro (escopo, prazos e próximos passos).", "cta_btn": "Falar agora", "show_title": "Elevating Solutions", "show_sub": "Arquitetura • Entrega • Sustentação", "show_k1": "Entrega", "show_v1": "Sprints com valor", "show_k2": "Governança", "show_v2": "Padrões e segurança", "show_k3": "Dados", "show_v3": "Integrações e qualidade", "footer_services": "Serviços", "footer_method": "Método", "footer_contact": "Contato"}, "en-US": {"nav_services": "Services", "nav_method": "Method", "nav_cta": "Talk now", "pill": "Fast delivery • Enterprise quality • Governance", "h1_line1": "Salesforce from <span class=\"accent\">planning</span> to <span class=\"accent\">execution</span>,", "h1_line2": "with a <span class=\"accent\">premium look</span> and an <span class=\"accent\">operation</span> built for your business.", "hero_sub": "Implementations, improvements, and ongoing support focused on performance, security, automation, and data. Hermon Data connects strategy, architecture, and delivery — without noise.", "btn_qr": "View contacts (QR)", "btn_services": "Explore services", "chip_admin": "Admin & Dev", "chip_clouds": "Sales Cloud • Service Cloud", "chip_dev": "Flows • Apex • LWC", "chip_int": "Integrations • APIs", "panel_title": "Delivery snapshot", "kpi_lead_label": "Lead time", "kpi_lead_value": "&lt; 2 weeks", "kpi_lead_note": "to first quick wins", "kpi_quality_label": "Quality", "kpi_quality_value": "enterprise standard", "kpi_quality_note": "reviews, tests & docs", "kpi_gov_label": "Governance", "kpi_gov_value": "security + scale", "kpi_gov_note": "best practices & auditability", "mini_title": "What you get", "mini_li1": "Architecture + prioritized backlog", "mini_li2": "Incremental delivery (sprints)", "mini_li3": "Documentation & handover", "mini_li4": "Monitoring & continuous improvement", "sec_services_title": "Services", "sec_services_desc": "Pick what makes sense now. We structure for growth without rebuilding later.", "svc1_title": "Implementation & Setup", "svc1_desc": "From zero to go-live: objects, permissions, automation, pipelines, and validations.", "svc1_li1": "Sales / Service Cloud", "svc1_li2": "Profiles, Permission Sets, Sharing", "svc1_li3": "Data model and governance", "svc2_title": "Automation & UX", "svc2_desc": "Processes that flow: well-designed Flows, fast screens, and a simple experience.", "svc2_li1": "Flow builder (gold standard)", "svc2_li2": "Smart validations", "svc2_li3": "LWC components when needed", "svc3_title": "Integrations & Data", "svc3_desc": "Integrate systems with traceability, security, and observability.", "svc3_li1": "REST/SOAP APIs, Platform Events", "svc3_li2": "MuleSoft / custom integrations", "svc3_li3": "Data quality and ETL", "svc4_title": "Support & Optimization", "svc4_desc": "Continuous improvement: performance, auditability, backlog, and clear SLAs.", "svc4_li1": "Architecture review", "svc4_li2": "Monitoring and fixes", "svc4_li3": "Quarterly roadmap", "sec_method_title": "Working method", "sec_method_desc": "Clarity and predictability — incremental delivery and objective communication.", "step1_title": "Discovery", "step1_desc": "Understand the business, real pain points, risks, and quick wins.", "step2_title": "Architecture & Backlog", "step2_desc": "Target design, standards, and ROI-based prioritization.", "step3_title": "Incremental delivery", "step3_desc": "Sprints with user validation, tests, and documentation.", "step4_title": "Handover & Growth", "step4_desc": "Training, governance, and continuous improvement with metrics.", "sec_contact_title": "Contact (QR Codes)", "sec_contact_desc": "Scan and reach out. We also provide written links for desktop.", "c_wa_title": "WhatsApp", "c_wa_sub": "Fast response", "contact_wa_btn": "Open WhatsApp", "c_li_title": "LinkedIn", "c_li_sub": "Company & cases", "contact_li_btn": "Visit LinkedIn", "c_em_title": "Email", "c_em_sub": "Proposals & projects", "contact_em_btn": "Send email", "foot_title": "Ready to start?", "foot_sub": "Send your needs and we’ll reply with a clear plan (scope, timeline, and next steps).", "cta_btn": "Talk now", "show_title": "Elevating Solutions", "show_sub": "Architecture • Delivery • Support", "show_k1": "Delivery", "show_v1": "Sprints with value", "show_k2": "Governance", "show_v2": "Standards & security", "show_k3": "Data", "show_v3": "Integrations & quality", "footer_services": "Services", "footer_method": "Method", "footer_contact": "Contact"}};

function normalizeLang(v){
  if(!v) return 'pt-BR';
  const s = String(v).toLowerCase();
  if(s.startsWith('en')) return 'en-US';
  return 'pt-BR';
}

function setLangParam(lang){
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  // keep hash
  window.location.href = url.toString();
}

function applyI18n(lang){
  const dict = I18N[lang] || I18N['pt-BR'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if(!val) return;
    // allow HTML for some keys (headlines)
    if(String(val).includes('<span') || String(val).includes('&lt;')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // set active state on buttons
  const pt = document.getElementById('langPT');
  const en = document.getElementById('langEN');
  if(pt && en){
    pt.classList.toggle('active', lang === 'pt-BR');
    en.classList.toggle('active', lang === 'en-US');
  }
}

(function initLang(){
  const url = new URL(window.location.href);
  const lang = normalizeLang(url.searchParams.get('lang'));
  applyI18n(lang);

  const pt = document.getElementById('langPT');
  const en = document.getElementById('langEN');
  if(pt){
    pt.addEventListener('click', (e)=>{ e.preventDefault(); setLangParam('pt-BR'); });
  }
  if(en){
    en.addEventListener('click', (e)=>{ e.preventDefault(); setLangParam('en-US'); });
  }
})();

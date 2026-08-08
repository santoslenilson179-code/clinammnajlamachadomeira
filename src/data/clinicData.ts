import { ClinicConfig, Treatment, Differentiator, Testimonial, BeforeAfterCase, FaqItem } from '../types';

import heroDentistImg from '../assets/images/hero_dentist_new_portrait_1786138004941.jpg';
import receptionImg from '../assets/images/clinic_reception_interior_1786136126274.jpg';
import treatmentRoomImg from '../assets/images/clinic_treatment_room_1786136146301.jpg';
import logoImg from '../assets/images/logo_clinica_najla_1786140820148.jpg';

export const defaultConfig: ClinicConfig = {
  dentistName: "Dra. Najla Machado Meira",
  cro: "CRO/BA",
  titleBadge: "ODONTOLOGIA DE EXCELÊNCIA",
  tagline: "Seu sorriso merece um cuidado à altura.",
  city: "Livramento de Nossa Sra., BA",
  address: "R. José Souza Meira - Centro, Livramento de Nossa Sra. - BA, 46140-000",
  phone: "(77) 98111-5285",
  whatsappNumber: "(77) 98111-5285",
  whatsappClean: "5577981115285",
  instagram: "@clinammdranajla",
  email: "contato@dranajlamachado.com.br",
  workingHours: "Fecha em breve · 18:00 · Abre sáb. às 08:00",
  plusCode: "9524+84 Centro, Livramento de Nossa Sra. - BA",
  heroImage: "https://i.ibb.co/Xkt7TRTJ/Save-Clip-App-681280578-17859479397631234-3682180836779359192-n.jpg",
  receptionImage: "https://i.ibb.co/KcqxT0Vy/foto-clinica-1186x673.jpg",
  treatmentRoomImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkcix0jwpSMhrHpG6mkxHTLY04oG8ph0_NVJn-PyGpYiil7JPC603YLXoUDxC9i5yp-Z9X_67y0WjdTwnACGy7iTsR-25vpFbWXFwAGBSzFPRhipLkVhTejAMrXmWysJeiv_3AQ-LbI--Ou",
  logoImage: logoImg,
};

export const treatmentsData: Treatment[] = [
  {
    id: "implantes",
    number: "01",
    title: "Implantes Dentários",
    shortDesc: "Reabilitação fixa segura com implantes de titânio para recuperar a função e estética com total conforto.",
    fullDesc: "Substituição de dentes ausentes com técnicas de implantes de alta precisão, permitindo rápida osseointegração, recuperação mastigatória total e estética natural.",
    iconName: "ShieldCheck",
    benefits: [
      "Substituição fixa e permanente de dentes ausentes",
      "Recuperação mastigatória e fonética plena",
      "Preservação da estrutura óssea facial",
      "Coroas em porcelana ou zircônia de altíssima durabilidade"
    ],
    duration: "Planejamento cirúrgico individualizado",
    idealFor: "Pacientes com perdas dentárias que buscam firmeza, segurança e estabilidade definitiva."
  },
  {
    id: "protese",
    number: "02",
    title: "Prótese Dentária",
    shortDesc: "Próteses fixas, removíveis e sobre implantes confeccionadas sob medida para restabelecer a mastigação.",
    fullDesc: "Reabilitação protética detalhada para devolver a anatomia, oclusão e harmonia do sorriso. Utilização de materiais nobres e alta tecnologia protética.",
    iconName: "Layers",
    benefits: [
      "Restauração da eficiência mastigatória e conforto",
      "Próteses fixas sobre implante ou dentes naturais",
      "Estética idêntica aos dentes naturais",
      "Ajuste oclusal preciso e duradouro"
    ],
    duration: "2 a 4 consultas",
    idealFor: "Pessoas que necessitam repor estruturas dentárias perdidas com naturalidade e conforto."
  },
  {
    id: "estetica",
    number: "03",
    title: "Estética Dental & Lentes",
    shortDesc: "Lentes de contato, facetas de porcelana, resinas avançadas e clareamento para um sorriso radiante.",
    fullDesc: "Harmonização do sorriso utilizando lentes de porcelana ultrafinas, restaurações estéticas em resina de alta refletividade e clareamento dental supervisionado.",
    iconName: "Smile",
    benefits: [
      "Planejamento estético individualizado",
      "Correção de cor, formato e pequenos desalinhamentos",
      "Clareamento dental seguro e eficaz",
      "Morfologia natural e preservação da estrutura hígida"
    ],
    duration: "1 a 3 sessões",
    idealFor: "Quem deseja transformar o sorriso com naturalidade, harmonia e acabamento sofisticado."
  },
  {
    id: "ortodontia",
    number: "04",
    title: "Ortodontia & Alinhadores",
    shortDesc: "Alinhamento dental e correção oclusal com alinhadores transparentes e aparelhos estéticos.",
    fullDesc: "Tratamento ortodôntico personalizado para alinhar os dentes e nivelar a mordida, promovendo saúde bucal, estética e equilíbrio funcional da arcada.",
    iconName: "Maximize2",
    benefits: [
      "Alinhadores invisíveis e aparelhos estéticos",
      "Melhoria na mastigação, respiração e oclusão",
      "Planejamento previsível e confortável",
      "Sorriso alinhado e harmônico"
    ],
    duration: "Cronograma conforme avaliação (6 a 18 meses)",
    idealFor: "Crianças, jovens e adultos que buscam alinhar os dentes e corrigir a posição dos maxilares."
  },
  {
    id: "periodontia",
    number: "05",
    title: "Periodontia",
    shortDesc: "Tratamento e preservação das gengivas e tecidos de suporte dos dentes.",
    fullDesc: "Prevenção, diagnóstico e tratamento de doenças gengivais (gengivite e periodontite), além de procedimentos plásticos gengivais para correção do sorriso gengival.",
    iconName: "Sparkles",
    benefits: [
      "Tratamento eficaz contra sangramento e inflamação gengival",
      "Preservação do osso e ligamentos de suporte dental",
      "Remoção profunda de tártaro e biofilme bacteriano",
      "Plástica gengival para harmonização do sorriso"
    ],
    duration: "Sessões periódicas preventivas ou terapêuticas",
    idealFor: "Pacientes com sensibilidade gengival, sangramento ou gengiva aparente ao sorrir."
  },
  {
    id: "dtm",
    number: "06",
    title: "DTM & Dor Orofacial",
    shortDesc: "Diagnóstico e controle de disfunções da ATM, bruxismo e dores faciais.",
    fullDesc: "Abordagem especializada para tratar alterações na articulação temporomandibular (ATM), aliviando dores de cabeça, estalos ao mastigar, apertamento dental e bruxismo.",
    iconName: "Activity",
    benefits: [
      "Placas de mordida miorrelaxantes sob medida",
      "Alívio efetivo de dores de cabeça, pescoço e face",
      "Proteção contra desgaste prematuro dos dentes",
      "Melhoria na qualidade do sono e relaxamento muscular"
    ],
    duration: "Tratamento e acompanhamento contínuo",
    idealFor: "Pessoas que sofrem com dores na mandíbula, estalos na ATM, dores de cabeça ou bruxismo."
  },
  {
    id: "endodontia",
    number: "07",
    title: "Endodontia (Tratamento de Canal)",
    shortDesc: "Tratamento de canal mecanizado sem dor para salvar dentes comprometidos por cárie ou trauma.",
    fullDesc: "Remoção da polpa dental inflamada ou infectada com uso de instrumentação rotatória moderna, garantindo rapidez, conforto e alívio imediato de dores agudas.",
    iconName: "Stethoscope",
    benefits: [
      "Preservação do dente natural na arcada",
      "Alívio imediato da dor de dente severa",
      "Tecnologia mecanizada para sessões mais rápidas",
      "Obturação hermética e segura"
    ],
    duration: "Geralmente de 1 a 2 sessões",
    idealFor: "Pacientes com dores de dente intensas, lesões profundas ou necessidade de canal."
  },
  {
    id: "odontopediatria",
    number: "08",
    title: "Odontopediatria",
    shortDesc: "Atendimento odontológico lúdico, afetuoso e especializado para bebês e crianças.",
    fullDesc: "Acompanhamento da saúde bucal infantil em ambiente acolhedor e sem traumas. Foco em prevenção de cáries, orientação sobre hábitos bucais e acompanhamento do crescimento dos dentes.",
    iconName: "Heart",
    benefits: [
      "Ambiente preparado e atendimento sem traumas",
      "Orientação preventiva aos pais e crianças",
      "Aplicação de flúor e selantes de proteção",
      "Acompanhamento do desenvolvimento das arcadas"
    ],
    duration: "Consultas de prevenção regulares",
    idealFor: "Bebês, crianças e adolescentes em fase de crescimento e dentição."
  }
];

export const differentiatorsData: Differentiator[] = [
  {
    number: "01",
    title: "Atendimento Individualizado",
    description: "Cada plano de tratamento é pensado de acordo com a biologia, objetivos e rotina de cada paciente. Sem soluções genéricas ou apressadas."
  },
  {
    number: "02",
    title: "Tecnologia & Precisão",
    description: "Recursos de escaneamento digital 3D, radiografia computadorizada e materiais de padrão europeu para garantir mais segurança, previsibilidade e conforto."
  },
  {
    number: "03",
    title: "Naturalidade nos Resultados",
    description: "Nosso foco é criar sorrisos que respeitem a harmonia do seu rosto, evitando o visual artificial e priorizando contornos e nuances naturais."
  },
  {
    number: "04",
    title: "Experiência Acolhedora",
    description: "Um ambiente relaxante com sonorização suave, aromaterapia e atendimento pontual, pensado para tornar sua consulta um momento leve e agradável."
  }
];

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "lentes-porcelana",
    title: "Lentes de Contato Dental",
    category: "Estética & Harmonização",
    description: "Readequação de formato, proporção áurea e alinhamento do sorriso com 10 lentes de porcelana ultra-delicadas.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    details: "Duração: 3 consultas | Material: Porcelana E.max | Técnica: DSD Minimamente Invasiva"
  },
  {
    id: "clareamento-combinado",
    title: "Clareamento Combinado Premium",
    category: "Clareamento & Estética",
    description: "Remoção profunda de pigmentos com 2 sessões em consultório + 10 dias de moldeira personalizada caseira.",
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    details: "Mudança de 6 tons na escala VITA | Sem sensibilidade residual"
  },
  {
    id: "reabilitacao-estetica",
    title: "Facetas em Resina Composta",
    category: "Restauração Estética",
    description: "Fechamento de diastemas e reconstrução de bordas incisais em sessão única.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    details: "Duração: 1 sessão de 2h30 | Preservação total da estrutura natural"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Dra. Carolina Freitas",
    procedure: "Lentes de Contato em Porcelana",
    rating: 5,
    text: "O atendimento da Dra. Nicole é impecável do começo ao fim. Eu tinha muito receio de ficar com dentes artificiais, mas o resultado ficou extremamente natural e harmônico. A clínica é linda e muito acolhedora!",
    date: "Há 2 semanas",
    avatarSeed: "carolina"
  },
  {
    id: "2",
    name: "Marcelo Siqueira",
    procedure: "Implantes & Reabilitação Oral",
    rating: 5,
    text: "A precisão da Dra. Nicole é impressionante. Fiz a cirurgia de implante guiado e praticamente não tive dor ou inchaço no pós-operatório. Voltei a sorrir e mastigar com total confiança.",
    date: "Há 1 mês",
    avatarSeed: "marcelo"
  },
  {
    id: "3",
    name: "Juliana Mendes",
    procedure: "Clareamento Dental & Estética",
    rating: 5,
    text: "Experiência de clínica internacional em Florianópolis. Pontualidade britânica, explicações detalhadas de cada etapa e um ambiente super tranquilo. Recomendo de olhos fechados!",
    date: "Há 3 semanas",
    avatarSeed: "juliana"
  }
];

export const faqData: FaqItem[] = [
  {
    id: "1",
    question: "Como funciona a primeira avaliação odontológica?",
    answer: "Na primeira consulta, realizamos um diagnóstico completo e minucioso. É feita uma anamnese detalhada, escaneamento intraoral e registro fotográfico de alta precisão. Apresentamos todas as opções de tratamento de forma transparente com simulação visual antes de iniciar qualquer procedimento."
  },
  {
    id: "2",
    question: "Quais são as principais modalidades de clareamento oferecidas?",
    answer: "Trabalhamos com o Clareamento de Consultório (a laser / LED), o Clareamento Caseiro Supervisionado com gel dessensibilizante e a técnica Combinada, que une a agilidade do consultório com a durabilidade e estabilidade do tratamento em casa."
  },
  {
    id: "3",
    question: "O procedimento com lentes de contato desgasta os dentes?",
    answer: "Utilizamos a filosofia de Odontologia Minimamente Invasiva. Antes de qualquer desgaste, realizamos o 'Mock-up' (teste do sorriso na boca) e escaneamento 3D. O desgaste, quando necessário, é milimétrico (frações de milímetro), preservando a vitalidade do dente."
  },
  {
    id: "4",
    question: "Como agendar uma consulta e quais são os horários?",
    answer: "Você pode agendar diretamente pelo botão de WhatsApp nesta página ou clicando em 'Agendar minha avaliação'. Nossa equipe entrará em contato para confirmar o dia e horário de sua preferência."
  },
  {
    id: "5",
    question: "É possível planejar tratamentos personalizados para quem tem pouco tempo?",
    answer: "Sim! Disponibilizamos o formato de Day Clinic / Atendimento Intensivo, onde agrupamos etapas de tratamentos estéticos e profiláticos em sessões otimizadas para acomodar a rotina de executivos e pacientes de outras cidades."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Agende sua Avaliação",
    desc: "Escolha o melhor dia e horário através do nosso WhatsApp ou formulário direto. Nossa equipe acolhedora confirmará seus dados rapidamente."
  },
  {
    step: "02",
    title: "Diagnóstico Digital",
    desc: "Exame clínico detalhado, registros fotográficos e escaneamento tridimensional para mapear com precisão a anatomia do seu sorriso."
  },
  {
    step: "03",
    title: "Plano Personalizado",
    desc: "Apresentação transparente do seu plano de tratamento, cronograma de sessões e simulação dos resultados antes do início."
  },
  {
    step: "04",
    title: "Transformação do Sorriso",
    desc: "Execução do tratamento com máxima tecnologia, protocolo de conforto e acompanhamento contínuo da sua saúde bucal."
  }
];

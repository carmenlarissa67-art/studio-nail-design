// ==============================================================================
// CONFIGURAÇÃO CENTRAL DO CLIENTE (NAIL DESIGNER)
// Para personalizar para cada nova cliente, basta alterar as informações abaixo:
// ==============================================================================

export const studioConfig = {
  name: "Studio Isabella Fontana",
  tagline: "Nail Designer & Master Educator",
  subtitle: "Especialista em Alongamentos Naturais, Fibra de Vidro e Blindagem Diamante.",
  city: "São Paulo, SP",
  address: "Av. Paulista, 1200 - Conjunto 42, Bela Vista",
  whatsappNumber: "5511999999999", // Apenas dígitos com DDI e DDD
  instagramUrl: "https://instagram.com",
  calendlyUrl: "https://calendly.com", // Link do Calendly da cliente
  workingHours: "Terça a Sábado das 09h às 19h",
  depositRequired: true,
  depositAmount: "R$ 30,00",
  pixKey: "contato@studiofontana.com.br",
  
  // Procedimentos oferecidos
  procedures: [
    {
      id: "fibra-vidro",
      title: "Alongamento em Fibra de Vidro",
      category: "Alongamento",
      description: "Técnica mais pedida para máxima naturalidade, curvatura C perfeita e alta resistência.",
      duration: "2h15",
      price: 180,
      popular: true,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
      details: ["Curvatura C simétrica", "Cuticulagem russa inclusa", "Esmaltação simples ou francesinha"],
    },
    {
      id: "gel-moldado",
      title: "Alongamento Gel Moldado",
      category: "Alongamento",
      description: "Construção sob medida sem tips, ideal para unhas roídas ou formatos amendoados e stiletto.",
      duration: "2h30",
      price: 200,
      popular: false,
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
      details: ["Sem cola e sem tips", "Alta durabilidade", "Design estrutural premium"],
    },
    {
      id: "manutencao",
      title: "Manutenção Premium (Até 25 dias)",
      category: "Manutenção",
      description: "Nivelamento da estrutura, reposição de gel, reforço de borda livre e nova esmaltação.",
      duration: "1h45",
      price: 120,
      popular: true,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80",
      details: ["Higienização profunda", "Troca de esmalte em gel", "Ajuste de formato"],
    },
    {
      id: "banho-gel",
      title: "Banho de Gel / Blindagem",
      category: "Naturais",
      description: "Camada protetora sobre a unha natural. Impede quebra e faz o esmalte durar até 20 dias.",
      duration: "1h15",
      price: 95,
      popular: false,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      details: ["Para quem tem unhas fracas", "Não adiciona comprimento", "Brilho espelhado prolongado"],
    },
    {
      id: "esmaltacao-gel",
      title: "Esmaltação em Gel",
      category: "Naturais",
      description: "Secagem instantânea em cabine LED. Saia pronta sem perigo de borrar a bolsa.",
      duration: "1h00",
      price: 75,
      popular: false,
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
      details: ["Duração de 15 a 20 dias", "Cuticulagem combinada", "Mais de 100 cores disponíveis"],
    },
  ],

  // Adicionais de Nail Art
  addons: [
    { id: "francesa", name: "Francesinha Sorriso / Reversa", price: 20 },
    { id: "babyboomer", name: "Efeito Babyboomer / Degradê", price: 25 },
    { id: "joias", name: "Aplicação de Cristais / Pedrarias (par)", price: 15 },
    { id: "remocao", name: "Remoção de outro estúdio", price: 40 },
  ],

  // Políticas e Regras do Studio
  policies: [
    {
      title: "Tolerância de Horário",
      description: "Tolerância máxima de 15 minutos de atraso para não comprometer o atendimento das próximas clientes.",
    },
    {
      title: "Cancelamento ou Reagendamento",
      description: "Solicitamos aviso com no mínimo 24h de antecedência para remarcação sem perda do horário.",
    },
    {
      title: "Acompanhantes",
      description: "Para seu conforto e foco total na excelência do procedimento, pedimos para evitar acompanhantes.",
    },
    {
      title: "Saúde das Unhas",
      description: "Não realizamos procedimentos sobre unhas com sinais de micoses, traumas ou lesões ativas.",
    },
  ],

  // Prova Social / Depoimentos Reais
  testimonials: [
    {
      name: "Mariana Siqueira",
      service: "Fibra de Vidro",
      comment: "Nunca mais fico sem! As unhas duram intactas o mês todo e a naturalidade é surreal. O sistema de agendamento facilitou muito minha vida.",
      rating: 5,
    },
    {
      name: "Dra. Camila Nogueira",
      service: "Banho de Gel",
      comment: "Como médica lavo as mãos o dia todo e nada durava. Com a blindagem da Isabella minhas unhas estão impecáveis sempre.",
      rating: 5,
    },
    {
      name: "Beatriz Albuquerque",
      service: "Manutenção",
      comment: "Atendimento de rainha! O estúdio é impecável e agendar pelo link em 1 minuto é maravilhoso.",
      rating: 5,
    },
  ],

  // Galeria de fotos de resultados
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
      tag: "Almond Nude Chic",
    },
    {
      url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      tag: "Francesinha Clássica",
    },
    {
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80",
      tag: "Babyboomer Suave",
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      tag: "Square Perfeita",
    },
    {
      url: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=80",
      tag: "Glitters & Cristais",
    },
    {
      url: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80",
      tag: "Vermelho Clássico",
    },
  ]
};

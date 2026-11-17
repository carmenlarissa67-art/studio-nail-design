# 🤖 Fluxo Completo do Typebot para Nail Designers

Se você quiser rodar o assistente dentro do próprio **Typebot** (ou embedar o iframe do Typebot no site), aqui está o roteiro estruturado com as mensagens, botões e lógica condicional:

---

## Estrutura dos Blocos (Grupos)

### Grupo 1: Boas-Vindas & Qualificação
- **Texto 1:** "Olá! Seja muito bem-vinda ao *Studio Nail Design* ✨"
- **Texto 2:** "Sou a assistente virtual e estou aqui para te ajudar a escolher o procedimento perfeito e garantir o seu horário na agenda."
- **Botões (Escolha de Procedimento):**
  - 💅 *Alongamento Novo (Fibra de Vidro)*
  - 🔄 *Manutenção de Alongamento*
  - 🛡️ *Banho de Gel / Blindagem*
  - ✨ *Esmaltação em Gel*
  - 💬 *Falar com a Nail Designer no WhatsApp*

---

### Grupo 2: Apresentação do Procedimento Escolhido
*(Criar ramificações condicionais baseadas na escolha acima)*

- **Se escolheu Alongamento Novo:**
  - **Texto:** "Perfeita escolha! O *Alongamento em Fibra de Vidro* é o mais procurado. Deixa a unha ultrafina, com curvatura anatômica e dura até 30 dias com manutenção."
  - **Texto:** "⏱️ Duração média: 2h15 | 💰 Investimento: R$ 180,00 (já inclui cuticulagem russa)."
  - **Botões:** `[Avançar para Agendamento]`, `[Ver Fotos de Resultados]`

- **Se escolheu Manutenção:**
  - **Texto:** "A manutenção garante a integridade da sua lâmina e reforça a estrutura."
  - **Pergunta (Botões):** "Seu alongamento atual foi feito aqui no estúdio?"
    - *Sim* -> "Ótimo! O valor da manutenção é R$ 120,00."
    - *Não (outro espaço)* -> "Cobramos uma taxa adicional de R$ 40,00 para avaliar e nivelar o produto anterior."

- **Se escolheu Banho de Gel / Blindagem:**
  - **Texto:** "O Banho de Gel cria uma blindagem protetora nas suas unhas naturais, impedindo que quebrem ou descasquem. O investimento é de R$ 95,00."

---

### Grupo 3: Filtro de Regras e Políticas (Anti-Prejuízo)
- **Texto:** "Antes de escolhermos seu dia e horário, preciso que você confirme que está de acordo com as regrinhas do nosso estúdio:
  1. Tolerância máxima de 15 minutos de atraso.
  2. Unhas saudáveis (sem micoses ou lesões).
  3. Desmarcar com no mínimo 24h de antecedência."
- **Botão de Confirmação:** `[Li e concordo com todas as regras ✅]`

---

### Grupo 4: Agendamento Automático via Calendly
- **Bloco de Integração (Embed ou Redirecionamento):**
  - Inserir o Link do Calendly da Nail Designer: `https://calendly.com/[usuario]`
- **Texto:** "Selecione o melhor dia e horário na agenda oficial acima! Os horários disponíveis atualizam em tempo real."

---

### Grupo 5: Finalização e Confirmação no WhatsApp
- **Texto:** "Tudo pronto! Seu horário foi pré-reservado com sucesso 🎉"
- **Botão com Link Dinâmico (WhatsApp):**
  - URL: `https://wa.me/5511999999999?text=Ol%C3%A1!%20Acabei%20de%20fazer%20o%20agendamento%20pelo%20site%20para%20confirmar%20meu%20hor%C3%A1rio.`

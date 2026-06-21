/* ============================================================
   TRADUCTIONS INTERFACE — FR / EN
   ============================================================ */

var I18N = {
  fr: {
    logo: "QuizCarnet",
    navHome: "Accueil",
    navQuiz: "Quiz",
    navRank: "Classement",
    tag: "✎ 100% gratuit · sans inscription",
    heroTitle: "Des quiz qui donnent<br>vraiment envie de rejouer",
    heroSub: "10 thèmes, de 10 à 100 questions, en français ou en anglais. Choisissez votre format, jouez à votre rythme.",
    heroCta: "Choisir un quiz →",
    hcs1: "Thèmes", hcs2: "Questions", hcs3: "Langues", hcs4: "Parties",
    ad: "📢 Publicité — à remplacer par le code AdSense une fois approuvé",
    sec1Eyebrow: "Dix thèmes",
    sec1Title: "Choisissez votre défi",
    sec1Sub: "Chaque quiz se personnalise : nombre de questions, et possibilité de passer une question difficile.",
    sec2Eyebrow: "Classement",
    sec2Title: "Les meilleurs scores",
    lbTitle: "Top joueurs",
    lbAll: "Tous",
    footerTag: "Quiz gratuits en français et en anglais — 10 thèmes à explorer",
    footHome: "Accueil", footQuiz: "Quiz", footPrivacy: "Politique de confidentialité", footLegal: "Mentions légales",
    questions: "questions",
    play: "Jouer →",
    setupTitle: "Avant de commencer",
    setupLabel: "Nombre de questions",
    setupStart: "Commencer le quiz →",
    setupCancel: "Annuler",
    question: "Question",
    timeUp: "Temps écoulé !",
    correct: "Bravo !",
    incorrect: "Incorrect.",
    next: "Question suivante →",
    seeResults: "Voir mes résultats →",
    skip: "Passer →",
    yourScore: "Votre score",
    goodAnswers: "bonnes réponses",
    good: "Bonnes",
    bad: "Mauvaises",
    skipped: "Passées",
    avgTime: "Temps moy.",
    pseudoLabel: "Entrez votre pseudo pour le classement",
    pseudoPlaceholder: "Votre pseudo...",
    shareBtn: "🔗 Sauvegarder & partager",
    replayBtn: "🔄 Rejouer",
    shareCopied: "Score copié ! Colle-le où tu veux 🎉",
    shareText: function(pct, score, total, title) {
      return "J'ai obtenu " + pct + "% au quiz " + title + " sur QuizCarnet ! (" + score + "/" + total + ") 📝 Peux-tu faire mieux ?";
    },
    resultMsgs: [
      "Pas de panique, réessaie !",
      "Pas mal ! Continue comme ça.",
      "Bon score ! Tu connais tes classiques.",
      "Excellent ! Tu maîtrises le sujet.",
      "Parfait ! Tu es incollable !"
    ],
    howItems: [
      { num: "01", title: "Choisissez un thème", desc: "Dix thèmes différents, du sport à la science." },
      { num: "02", title: "Réglez le format", desc: "De 10 à 100 questions, selon le temps que vous avez." },
      { num: "03", title: "Répondez ou passez", desc: "20 secondes par question, ou passez si vous séchez." },
      { num: "04", title: "Grimpez au classement", desc: "Entrez votre pseudo et comparez votre score." }
    ],
    themeNames: {
      culture: "Culture générale", sport: "Sport", cinema: "Cinéma", geo: "Géographie",
      music: "Musique", history: "Histoire", science: "Science", games: "Jeux vidéo",
      series: "Séries TV", animals: "Animaux"
    },
    themeDesc: {
      culture: "Histoire, art, sciences...", sport: "Foot, tennis, JO...", cinema: "Films, réalisateurs, oscars...",
      geo: "Capitales, fleuves, continents...", music: "Artistes, instruments, genres...", history: "Dates, rois, batailles...",
      science: "Corps humain, espace, chimie...", games: "Jeux vidéo, consoles, héros...",
      series: "Séries cultes, personnages...", animals: "Faune, records, comportements..."
    }
  },

  en: {
    logo: "QuizNotebook",
    navHome: "Home",
    navQuiz: "Quizzes",
    navRank: "Leaderboard",
    tag: "✎ 100% free · no sign-up",
    heroTitle: "Quizzes that actually<br>make you want to replay",
    heroSub: "10 topics, from 10 to 100 questions, in French or English. Pick your format, play at your own pace.",
    heroCta: "Pick a quiz →",
    hcs1: "Topics", hcs2: "Questions", hcs3: "Languages", hcs4: "Games played",
    ad: "📢 Ad slot — replace with AdSense code once approved",
    sec1Eyebrow: "Ten topics",
    sec1Title: "Pick your challenge",
    sec1Sub: "Every quiz is customizable: number of questions, and the option to skip a tough one.",
    sec2Eyebrow: "Leaderboard",
    sec2Title: "Top scores",
    lbTitle: "Top players",
    lbAll: "All",
    footerTag: "Free quizzes in French and English — 10 topics to explore",
    footHome: "Home", footQuiz: "Quizzes", footPrivacy: "Privacy policy", footLegal: "Legal notice",
    questions: "questions",
    play: "Play →",
    setupTitle: "Before you start",
    setupLabel: "Number of questions",
    setupStart: "Start the quiz →",
    setupCancel: "Cancel",
    question: "Question",
    timeUp: "Time's up!",
    correct: "Nice!",
    incorrect: "Incorrect.",
    next: "Next question →",
    seeResults: "See my results →",
    skip: "Skip →",
    yourScore: "Your score",
    goodAnswers: "correct answers",
    good: "Correct",
    bad: "Wrong",
    skipped: "Skipped",
    avgTime: "Avg. time",
    pseudoLabel: "Enter your name for the leaderboard",
    pseudoPlaceholder: "Your name...",
    shareBtn: "🔗 Save & share",
    replayBtn: "🔄 Play again",
    shareCopied: "Score copied! Paste it anywhere 🎉",
    shareText: function(pct, score, total, title) {
      return "I scored " + pct + "% on the " + title + " quiz on QuizNotebook! (" + score + "/" + total + ") 📝 Can you beat it?";
    },
    resultMsgs: [
      "No worries, try again!",
      "Not bad! Keep it up.",
      "Good score! You know your stuff.",
      "Excellent! You've mastered this.",
      "Perfect! You're unstoppable!"
    ],
    howItems: [
      { num: "01", title: "Pick a topic", desc: "Ten different topics, from sports to science." },
      { num: "02", title: "Set the format", desc: "From 10 to 100 questions, depending on your time." },
      { num: "03", title: "Answer or skip", desc: "20 seconds per question, or skip if you're stuck." },
      { num: "04", title: "Climb the leaderboard", desc: "Enter your name and compare your score." }
    ],
    themeNames: {
      culture: "General knowledge", sport: "Sports", cinema: "Movies", geo: "Geography",
      music: "Music", history: "History", science: "Science", games: "Video games",
      series: "TV Shows", animals: "Animals"
    },
    themeDesc: {
      culture: "History, art, science...", sport: "Soccer, tennis, Olympics...", cinema: "Films, directors, Oscars...",
      geo: "Capitals, rivers, continents...", music: "Artists, instruments, genres...", history: "Dates, kings, battles...",
      science: "Human body, space, chemistry...", games: "Video games, consoles, heroes...",
      series: "Classic shows, characters...", animals: "Wildlife, records, behavior..."
    }
  }
};

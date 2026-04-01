import { Locale } from "./types";

export const dictionaries = {
  fr: {
    // App
    appTagline: "Plateforme montréalaise de marche canine",
    heroCtaPrimary: "Trouver des compagnons",
    heroCtaSecondary: "Voir les circuits",

    // Navigation
    navHome: "Accueil",
    navDashboard: "Tableau de bord",
    navCompanions: "Compagnons",
    navRoutes: "Circuits",
    navEvents: "Marches",
    navLogin: "Connexion",

    // Pages
    pageCompanions: "Trouver des compagnons de marche",
    pageRoutes: "Carte des circuits",
    pageEvents: "Marches planifiées",
    pageDashboard: "Bonjour",
    pageProfile: "Profil utilisateur",
    pageAuth: "Connexion / Inscription",
    pageRouteDetail: "Commentaires (MVP)",

    // Buttons
    btnJoinWalk: "Rejoindre la marche",
    btnLeaveWalk: "Quitter la marche",
    btnSendRequest: "Envoyer une demande",
    btnRequestSent: "Demande envoyée",
    btnCreateEvent: "Créer une marche",
    btnContinue: "Continuer",
    btnRetry: "Réessayer",
    btnViewRoute: "Voir la fiche détaillée →",
    btnManageWalks: "Gérer mes marches →",

    // Filters
    filterAll: "Tous",
    filterDuration: "Durée",
    filterDistance: "Distance",
    filterDifficulty: "Difficulté",
    filterSurface: "Surface",
    filterBorough: "Arrondissement",
    filterPetSize: "Taille du chien",
    filterEnergyLevel: "Niveau d'énergie",
    filterWalkType: "Type de marche",

    // Labels
    labelTrustScore: "Indice confiance",
    labelRequests: "Demandes",
    labelUpcomingWalks: "Marches prévues",
    labelNextWalks: "Prochaines marches",
    labelMeetingPoint: "Point de rencontre",
    labelHost: "Hôte",
    labelParticipants: "Participants",
    labelRoute: "Circuit",
    labelLocation: "Localisation",
    labelDistance: "Distance",
    labelDuration: "Durée estimée",
    labelDifficulty: "Difficulté",
    labelTips: "Conseils",
    labelAmenities: "Équipements",
    labelAverageRating: "Note moyenne",
    labelNotConnected: "Non connecté",
    labelRequestPending: "Demande envoyée",
    labelConnected: "Connecté",

    // Auth
    authEmail: "Courriel",
    authPassword: "Mot de passe",
    authMvpNote: "MVP : authentification simulée",
    authSuccess: "Bienvenue ! Redirection...",

    // Events form
    eventTitlePlaceholder: "Titre de la marche",
    eventMeetingPlaceholder: "Point de rencontre (public)",
    eventMaxParticipants: "Participants max",

    // Errors
    errorTitle: "Une erreur est survenue",
    errorDescription: "Quelque chose s'est mal passé. Veuillez réessayer.",
    loadingText: "Chargement...",

    // Popular routes
    popularRoutes: "Circuits populaires à Montréal",

    // Map
    mapTitle: "Carte interactive",
    mapDescription: "Cette version affiche les circuits de marche canine sur la carte. Les points indiquent des zones publiques de rencontre.",

    // Profile
    profileName: "Nom",
    profileSector: "Secteur",
    profileLanguage: "Langue",
    profileAvailability: "Disponibilités",
    profileActivityLevel: "Niveau d'activité",
    profileWalkPreference: "Préférence de marche",
    profileViewPet: "Voir le profil de",
  },
  en: {
    // App
    appTagline: "Montreal dog walking community platform",
    heroCtaPrimary: "Find companions",
    heroCtaSecondary: "Browse routes",

    // Navigation
    navHome: "Home",
    navDashboard: "Dashboard",
    navCompanions: "Companions",
    navRoutes: "Routes",
    navEvents: "Walks",
    navLogin: "Login",

    // Pages
    pageCompanions: "Find walking companions",
    pageRoutes: "Route map",
    pageEvents: "Planned walks",
    pageDashboard: "Hello",
    pageProfile: "User profile",
    pageAuth: "Login / Register",
    pageRouteDetail: "Reviews (MVP)",

    // Buttons
    btnJoinWalk: "Join walk",
    btnLeaveWalk: "Leave walk",
    btnSendRequest: "Send request",
    btnRequestSent: "Request sent",
    btnCreateEvent: "Create a walk",
    btnContinue: "Continue",
    btnRetry: "Retry",
    btnViewRoute: "View route details →",
    btnManageWalks: "Manage my walks →",

    // Filters
    filterAll: "All",
    filterDuration: "Duration",
    filterDistance: "Distance",
    filterDifficulty: "Difficulty",
    filterSurface: "Surface",
    filterBorough: "Borough",
    filterPetSize: "Dog size",
    filterEnergyLevel: "Energy level",
    filterWalkType: "Walk type",

    // Labels
    labelTrustScore: "Trust score",
    labelRequests: "Requests",
    labelUpcomingWalks: "Upcoming walks",
    labelNextWalks: "Next walks",
    labelMeetingPoint: "Meeting point",
    labelHost: "Host",
    labelParticipants: "Participants",
    labelRoute: "Route",
    labelLocation: "Location",
    labelDistance: "Distance",
    labelDuration: "Estimated duration",
    labelDifficulty: "Difficulty",
    labelTips: "Tips",
    labelAmenities: "Amenities",
    labelAverageRating: "Average rating",
    labelNotConnected: "Not connected",
    labelRequestPending: "Request pending",
    labelConnected: "Connected",

    // Auth
    authEmail: "Email",
    authPassword: "Password",
    authMvpNote: "MVP: simulated authentication",
    authSuccess: "Welcome! Redirecting...",

    // Events form
    eventTitlePlaceholder: "Walk title",
    eventMeetingPlaceholder: "Meeting point (public)",
    eventMaxParticipants: "Max participants",

    // Errors
    errorTitle: "An error occurred",
    errorDescription: "Something went wrong. Please try again.",
    loadingText: "Loading...",

    // Popular routes
    popularRoutes: "Popular routes in Montreal",

    // Map
    mapTitle: "Interactive map",
    mapDescription: "This version displays dog walking routes on the map. Points indicate public meeting areas.",

    // Profile
    profileName: "Name",
    profileSector: "Area",
    profileLanguage: "Language",
    profileAvailability: "Availability",
    profileActivityLevel: "Activity level",
    profileWalkPreference: "Walk preference",
    profileViewPet: "View profile of",
  }
} as const;

export type TranslationKey = keyof (typeof dictionaries)["fr"];

export function t(locale: Locale, key: TranslationKey) {
  return dictionaries[locale][key] ?? dictionaries.fr[key];
}

import { PetProfile, UserProfile, WalkEvent, WalkRequest, WalkRoute } from "./types";

export const neighborhoods = [
  "Plateau-Mont-Royal",
  "Rosemont–La Petite-Patrie",
  "Verdun",
  "Villeray",
  "Laval-des-Rapides",
  "Longueuil Vieux-Longueuil"
];

export const users: UserProfile[] = [
  {
    id: "u1",
    displayName: "Camille",
    photoUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400",
    borough: "Plateau-Mont-Royal",
    bio: "J'adore les marches matinales près du Mont-Royal.",
    language: "fr",
    availability: "Semaine 7h-9h, dimanche après-midi",
    activityLevel: "modere",
    walkPreference: "moyenne",
    trustScore: 4.8,
    badges: ["marcheur actif", "explorateur de quartiers"]
  },
  {
    id: "u2",
    displayName: "Alex",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    borough: "Verdun",
    bio: "Looking for canal walks and chill evening groups.",
    language: "en",
    availability: "Weekdays after 18:00",
    activityLevel: "calme",
    walkPreference: "courte",
    trustScore: 4.5,
    badges: ["ami des petits chiens"]
  },
  {
    id: "u3",
    displayName: "Nadia",
    photoUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
    borough: "Laval-des-Rapides",
    bio: "Je fais des longues promenades au bord de la rivière.",
    language: "fr",
    availability: "Samedi matin et mardi soir",
    activityLevel: "sportif",
    walkPreference: "longue",
    trustScore: 4.9,
    badges: ["ami des chiens seniors"]
  }
];

export const pets: PetProfile[] = [
  {
    id: "p1",
    ownerId: "u1",
    name: "Milo",
    animalType: "dog",
    breed: "Berger australien",
    size: "medium",
    age: 4,
    energyLevel: "high",
    dogSociability: "high",
    humanSociability: "high",
    specialNeeds: "Aucun",
    photoUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400"
  },
  {
    id: "p2",
    ownerId: "u2",
    name: "Poppy",
    animalType: "dog",
    breed: "Corgi",
    size: "small",
    age: 6,
    energyLevel: "medium",
    dogSociability: "medium",
    humanSociability: "high",
    specialNeeds: "Préfère les groupes de 4 chiens maximum",
    photoUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400"
  },
  {
    id: "p3",
    ownerId: "u3",
    name: "Rex",
    animalType: "dog",
    breed: "Labrador",
    size: "large",
    age: 8,
    energyLevel: "medium",
    dogSociability: "high",
    humanSociability: "high",
    specialNeeds: "Éviter les surfaces glacées",
    photoUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400"
  }
];

export const routes: WalkRoute[] = [
  { id: "r1", name: "Boucle du Mont-Royal", citySector: "Montréal", lat: 45.5048, lng: -73.5878, distanceKm: 5.4, durationMin: 90, difficulty: "moderate", surface: "mixte", shaded: true, accessible: false, dogFriendly: true, popularity: 95, description: "Boucle panoramique autour du parc du Mont-Royal.", tips: "Apporter de l'eau et une laisse courte sur les sections achalandées.", amenities: ["fontaine", "toilettes", "stationnement"], rating: 4.8 },
  { id: "r2", name: "Parc La Fontaine - circuit lacs", citySector: "Montréal", lat: 45.5264, lng: -73.5695, distanceKm: 2.7, durationMin: 45, difficulty: "easy", surface: "asphalte", shaded: true, accessible: true, dogFriendly: true, popularity: 87, description: "Circuit convivial autour des bassins et sentiers du parc.", tips: "Idéal tôt le matin pour des chiens plus anxieux.", amenities: ["toilettes", "bancs", "café"], rating: 4.6 },
  { id: "r3", name: "Canal de Lachine - tronçon Atwater", citySector: "Sud-Ouest", lat: 45.4794, lng: -73.5756, distanceKm: 6.2, durationMin: 95, difficulty: "easy", surface: "asphalte", shaded: false, accessible: true, dogFriendly: true, popularity: 92, description: "Long ruban riverain parfait pour rythme soutenu.", tips: "Peu d'ombre en été, sortir tôt.", amenities: ["eau", "toilettes", "station BIXI"], rating: 4.7 },
  { id: "r4", name: "Parc Maisonneuve - anneau vert", citySector: "Mercier–Hochelaga-Maisonneuve", lat: 45.5579, lng: -73.5499, distanceKm: 4.1, durationMin: 65, difficulty: "easy", surface: "gravier", shaded: true, accessible: true, dogFriendly: true, popularity: 78, description: "Parcours large et calme, super pour socialisation.", tips: "Choisir le côté jardin botanique pour plus d'ombre.", amenities: ["toilettes", "aire de repos"], rating: 4.4 },
  { id: "r5", name: "Île-des-Soeurs - berge centrale", citySector: "Verdun", lat: 45.4678, lng: -73.543, distanceKm: 3.8, durationMin: 55, difficulty: "easy", surface: "mixte", shaded: true, accessible: true, dogFriendly: true, popularity: 73, description: "Parcours paisible au bord du fleuve.", tips: "Vent soutenu en automne, prévoir manteau pour petit chien.", amenities: ["bancs", "stationnement"], rating: 4.3 },
  { id: "r6", name: "Laval riverfront - Berge des Prairies", citySector: "Laval", lat: 45.5618, lng: -73.7499, distanceKm: 5.9, durationMin: 90, difficulty: "moderate", surface: "mixte", shaded: false, accessible: true, dogFriendly: true, popularity: 69, description: "Promenade riveraine panoramique sur la Rive-Nord.", tips: "Présence de cyclistes, garder sa droite.", amenities: ["bancs", "fontaine"], rating: 4.2 }
];

export const walkEvents: WalkEvent[] = [
  { id: "e1", title: "Marche socialisation du Plateau", routeId: "r2", hostUserId: "u1", meetingPoint: "Entrée Rachel / Calixa-Lavallée", startAt: "2026-04-06T10:00:00.000Z", maxParticipants: 8, isPublic: true, participants: ["u1", "u2"] },
  { id: "e2", title: "Canal sunset walk", routeId: "r3", hostUserId: "u2", meetingPoint: "Marché Atwater (coin Notre-Dame)", startAt: "2026-04-07T22:00:00.000Z", maxParticipants: 6, isPublic: true, participants: ["u2"] },
  { id: "e3", title: "Sortie seniors-friendly", routeId: "r6", hostUserId: "u3", meetingPoint: "Belvédère Berge des Prairies", startAt: "2026-04-10T13:00:00.000Z", maxParticipants: 5, isPublic: false, participants: ["u3", "u1"] }
];

export const walkRequests: WalkRequest[] = [
  { id: "wr1", fromUserId: "u1", toUserId: "u2", status: "pending", message: "Partant pour une marche mardi soir au canal?" },
  { id: "wr2", fromUserId: "u3", toUserId: "u1", status: "accepted", message: "On fait une sortie calme avec nos chiens samedi?" }
];

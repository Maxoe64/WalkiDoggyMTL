export type Locale = "fr" | "en";

export type UserProfile = {
  id: string;
  displayName: string;
  photoUrl: string;
  borough: string;
  bio: string;
  language: Locale;
  availability: string;
  activityLevel: "calme" | "modere" | "sportif";
  walkPreference: "courte" | "moyenne" | "longue";
  trustScore: number;
  badges: string[];
};

export type PetProfile = {
  id: string;
  ownerId: string;
  name: string;
  animalType: "dog" | "other";
  breed: string;
  size: "small" | "medium" | "large";
  age: number;
  energyLevel: "low" | "medium" | "high";
  dogSociability: "low" | "medium" | "high";
  humanSociability: "low" | "medium" | "high";
  specialNeeds: string;
  photoUrl: string;
};

export type WalkRoute = {
  id: string;
  name: string;
  citySector: string;
  lat: number;
  lng: number;
  distanceKm: number;
  durationMin: number;
  difficulty: "easy" | "moderate" | "challenging";
  surface: string;
  shaded: boolean;
  accessible: boolean;
  dogFriendly: boolean;
  popularity: number;
  description: string;
  tips: string;
  amenities: string[];
  rating: number;
};

export type WalkEvent = {
  id: string;
  title: string;
  routeId: string;
  hostUserId: string;
  meetingPoint: string;
  startAt: string;
  maxParticipants: number;
  isPublic: boolean;
  participants: string[];
};

export type WalkRequest = {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: "pending" | "accepted";
  message: string;
};

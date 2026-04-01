import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.eventParticipant.deleteMany();
  await prisma.walkEvent.deleteMany();
  await prisma.walkRequest.deleteMany();
  await prisma.pet.deleteMany();
  await prisma.walkRoute.deleteMany();
  await prisma.user.deleteMany();
  await prisma.borough.deleteMany();

  const boroughs = await prisma.$transaction([
    prisma.borough.create({ data: { name: "Plateau-Mont-Royal", regionGroup: "Montréal" } }),
    prisma.borough.create({ data: { name: "Verdun", regionGroup: "Montréal" } }),
    prisma.borough.create({ data: { name: "Laval-des-Rapides", regionGroup: "Laval" } }),
    prisma.borough.create({ data: { name: "Vieux-Longueuil", regionGroup: "Longueuil" } })
  ]);

  const [plateau, verdun, laval] = boroughs;

  const camille = await prisma.user.create({
    data: {
      email: "camille@doggywalkimtl.local",
      passwordHash: "demo_hash",
      displayName: "Camille",
      boroughId: plateau.id,
      bio: "J'adore les marches matinales près du Mont-Royal.",
      language: "fr",
      availability: "Semaine 7h-9h",
      activityLevel: "modere",
      walkPreference: "moyenne",
      trustScore: 4.8
    }
  });

  const alex = await prisma.user.create({
    data: {
      email: "alex@doggywalkimtl.local",
      passwordHash: "demo_hash",
      displayName: "Alex",
      boroughId: verdun.id,
      bio: "Canal walks and neighborhood meetups.",
      language: "en",
      availability: "Weekdays after 18:00",
      activityLevel: "calme",
      walkPreference: "courte",
      trustScore: 4.5
    }
  });

  const nadia = await prisma.user.create({
    data: {
      email: "nadia@doggywalkimtl.local",
      passwordHash: "demo_hash",
      displayName: "Nadia",
      boroughId: laval.id,
      bio: "Sorties longues et sécuritaires au bord de l'eau.",
      language: "fr",
      availability: "Samedi matin",
      activityLevel: "sportif",
      walkPreference: "longue",
      trustScore: 4.9
    }
  });

  await prisma.pet.createMany({
    data: [
      { ownerId: camille.id, name: "Milo", breed: "Berger australien", size: "medium", age: 4, energyLevel: "high", dogSociability: "high", humanSociability: "high" },
      { ownerId: alex.id, name: "Poppy", breed: "Corgi", size: "small", age: 6, energyLevel: "medium", dogSociability: "medium", humanSociability: "high" },
      { ownerId: nadia.id, name: "Rex", breed: "Labrador", size: "large", age: 8, energyLevel: "medium", dogSociability: "high", humanSociability: "high" }
    ]
  });

  const routeMontRoyal = await prisma.walkRoute.create({
    data: {
      boroughId: plateau.id,
      name: "Boucle du Mont-Royal",
      locationLabel: "Montréal",
      lat: 45.5048,
      lng: -73.5878,
      distanceKm: 5.4,
      durationMin: 90,
      difficulty: "moderate",
      surface: "mixte",
      shaded: true,
      accessible: false,
      description: "Boucle panoramique autour du parc du Mont-Royal.",
      tips: "Apporter de l'eau.",
      amenities: ["fontaine", "toilettes"],
      averageRating: 4.8,
      popularity: 95
    }
  });

  const routeCanal = await prisma.walkRoute.create({
    data: {
      boroughId: verdun.id,
      name: "Canal de Lachine - tronçon Atwater",
      locationLabel: "Sud-Ouest",
      lat: 45.4794,
      lng: -73.5756,
      distanceKm: 6.2,
      durationMin: 95,
      difficulty: "easy",
      surface: "asphalte",
      shaded: false,
      accessible: true,
      description: "Long ruban riverain parfait pour rythme soutenu.",
      tips: "Sortir tôt en été.",
      amenities: ["eau", "toilettes"],
      averageRating: 4.7,
      popularity: 92
    }
  });

  const event = await prisma.walkEvent.create({
    data: {
      routeId: routeCanal.id,
      hostUserId: alex.id,
      title: "Canal sunset walk",
      meetingPoint: "Marché Atwater (coin Notre-Dame)",
      startsAt: new Date("2026-04-07T22:00:00.000Z"),
      maxParticipants: 6,
      isPublic: true
    }
  });

  await prisma.eventParticipant.createMany({
    data: [
      { eventId: event.id, userId: alex.id },
      { eventId: event.id, userId: camille.id }
    ]
  });

  await prisma.walkRequest.create({
    data: {
      fromUserId: camille.id,
      toUserId: nadia.id,
      message: "Partante pour une sortie samedi matin?",
      status: "pending"
    }
  });

  await prisma.review.create({
    data: {
      routeId: routeMontRoyal.id,
      userId: camille.id,
      rating: 5,
      comment: "Circuit superbe et sécuritaire pour socialiser nos chiens."
    }
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});

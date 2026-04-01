import { notFound } from "next/navigation";
import { pets } from "@/lib/data";

type Props = { params: { id: string } };

export default function PetProfilePage({ params }: Props) {
  const pet = pets.find((candidate) => candidate.id === params.id);
  if (!pet) return notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profil animal: {pet.name}</h1>
      <div className="card space-y-1">
        <p><strong>Type:</strong> {pet.animalType}</p>
        <p><strong>Race:</strong> {pet.breed}</p>
        <p><strong>Taille:</strong> {pet.size}</p>
        <p><strong>Âge:</strong> {pet.age} ans</p>
        <p><strong>Énergie:</strong> {pet.energyLevel}</p>
        <p><strong>Sociabilité chiens:</strong> {pet.dogSociability}</p>
        <p><strong>Sociabilité humains:</strong> {pet.humanSociability}</p>
        <p><strong>Besoins particuliers:</strong> {pet.specialNeeds}</p>
      </div>
    </div>
  );
}

-- CreateTable
CREATE TABLE "Batiment" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,

    CONSTRAINT "Batiment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appartement" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" INTEGER NOT NULL,
    "nombre_chambres" INTEGER NOT NULL,
    "surface" INTEGER NOT NULL,
    "etage" INTEGER,
    "adresse" TEXT,
    "ville" TEXT,
    "code_postal" TEXT,
    "pays" TEXT,
    "date_disponibilite" TIMESTAMP(3),
    "date_mise_a_jour" TIMESTAMP(3),
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type_de_bien" TEXT NOT NULL,
    "type_de_transaction" TEXT NOT NULL,
    "meuble" BOOLEAN NOT NULL DEFAULT false,
    "balcon" BOOLEAN NOT NULL DEFAULT false,
    "terrasse" BOOLEAN NOT NULL DEFAULT false,
    "parking" BOOLEAN NOT NULL DEFAULT false,
    "ascenseur" BOOLEAN NOT NULL DEFAULT false,
    "cave" BOOLEAN NOT NULL DEFAULT false,
    "vue_sur_la_mer" BOOLEAN NOT NULL DEFAULT false,
    "vue_sur_la_ville" BOOLEAN NOT NULL DEFAULT false,
    "proximite_commerces" BOOLEAN NOT NULL DEFAULT false,
    "proximite_transports" BOOLEAN NOT NULL DEFAULT false,
    "batimentId" INTEGER,

    CONSTRAINT "Appartement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "appartementId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appartement" ADD CONSTRAINT "Appartement_batimentId_fkey" FOREIGN KEY ("batimentId") REFERENCES "Batiment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_appartementId_fkey" FOREIGN KEY ("appartementId") REFERENCES "Appartement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

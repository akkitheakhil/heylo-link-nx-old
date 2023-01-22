-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "displayName" TEXT,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photoURL" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slugs" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Slugs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Slugs_slug_key" ON "Slugs"("slug");

-- AddForeignKey
ALTER TABLE "Slugs" ADD CONSTRAINT "Slugs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

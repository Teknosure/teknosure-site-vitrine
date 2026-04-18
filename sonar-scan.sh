#!/bin/bash

# Script pour lancer une analyse SonarQube
# Usage: ./sonar-scan.sh

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔍 Teknosure - Analyse SonarQube${NC}"
echo "=================================="

# Vérifier si sonar-scanner est installé
if ! command -v sonar-scanner &> /dev/null; then
    echo -e "${RED}❌ sonar-scanner n'est pas installé${NC}"
    echo ""
    echo "Installation sur macOS :"
    echo "  brew install sonar-scanner"
    echo ""
    echo "Installation sur Linux :"
    echo "  Consultez .sonarqube-setup.md"
    exit 1
fi

# Vérifier si le fichier .env.sonar existe
if [ ! -f .env.sonar ]; then
    echo -e "${YELLOW}⚠️  Fichier .env.sonar non trouvé${NC}"
    echo ""
    echo "Créez un fichier .env.sonar avec :"
    echo "SONAR_HOST_URL=http://votre-vps-ip:9000"
    echo "SONAR_TOKEN=votre-token"
    echo ""
    read -p "Voulez-vous continuer avec les paramètres manuels ? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    
    read -p "URL SonarQube : " SONAR_HOST_URL
    read -sp "Token SonarQube : " SONAR_TOKEN
    echo
else
    # Charger les variables d'environnement
    export $(cat .env.sonar | xargs)
fi

# Vérifier que les variables sont définies
if [ -z "$SONAR_HOST_URL" ] || [ -z "$SONAR_TOKEN" ]; then
    echo -e "${RED}❌ SONAR_HOST_URL et SONAR_TOKEN doivent être définis${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Configuration chargée${NC}"
echo "   Host: $SONAR_HOST_URL"
echo ""

# Lancer l'analyse
echo -e "${GREEN}🚀 Lancement de l'analyse...${NC}"
sonar-scanner \
  -Dsonar.host.url=$SONAR_HOST_URL \
  -Dsonar.login=$SONAR_TOKEN

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Analyse terminée avec succès !${NC}"
    echo ""
    echo "📊 Consultez les résultats sur :"
    echo "   $SONAR_HOST_URL/dashboard?id=teknosure-website"
else
    echo ""
    echo -e "${RED}❌ L'analyse a échoué${NC}"
    exit 1
fi

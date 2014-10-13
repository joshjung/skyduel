cd ./game-server && npm install -d --no-bin-link
echo '============   game-server npm installed ============'
cd ..
cd ./web-server && npm install -d --no-bin-link
echo '============   web-server npm installed ============'
cd ..
npm install
echo '============   root npm installed ============'

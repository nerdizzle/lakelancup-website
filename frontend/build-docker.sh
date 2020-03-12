# build
docker build -t nerdizzle/lakelandcup-frontend .
# run
docker run --name lakelandcup-frontend -p 80:5000 -d nerdizzle/lakelandcup-frontend
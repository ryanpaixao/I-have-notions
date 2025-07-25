#!/usr/bin/bash

# Backend
echo "Starting backend...";
(cd ./backend && npm start) &

# Frontend
echo "Starting frontend...";
(cd ./frontend && npm run dev) &

# Trap Ctrl+C to stop both processes
trap 'kill $(jobs -p); echo ""; echo "Both services stopped"' SIGINT

# Wait for both processes to finish
echo "Services running. Press Ctrl+C to stop..."
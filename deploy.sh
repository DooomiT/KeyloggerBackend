# environments 
kubectl apply -f mongodb/manifests/keyloggerbackend-mongodb-env.yaml
kubectl apply -f KeyloggerService/manifests/keyloggerbackend-keyloggerservice-env.yaml

# deployments 
kubectl apply -f mongodb/manifests/keyloggerbackend-mongodb-deployment.yaml
kubectl apply -f KeyloggerService/manifests/keyloggerbackend-keyloggerservice-deployment.yaml
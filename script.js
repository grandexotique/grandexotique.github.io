// Remplacez 'YOUR_SHOP_DOMAIN' par le domaine de votre boutique Shopify
const shopDomain = 'grandexotique.com';

// Remplacez 'YOUR_API_KEY' par votre clé API Shopify
const apiKey = '288f9b7582f27832b8b81dd95ec5fa1e';

// Remplacez 'YOUR_ACCESS_TOKEN' par votre jeton d'accès au magasin
const accessToken = '9a07627c4a80b0d1ce11acbb995d3ad3';

Shopify.Checkout.configure({
  shopDomain,
  apiKey,
  accessToken,
  billingAddressCallback: function(address) {
    // Fonction optionnelle pour personnaliser les champs d'adresse de facturation
    console.log('Adresse de facturation :', address);
  },
  shippingAddressCallback: function(address) {
    // Fonction optionnelle pour personnaliser les champs d'adresse de livraison
    console.log('Adresse de livraison :', address);
  },
  paymentCallback: function(payment) {
    // Fonction optionnelle pour traiter les informations de paiement
    console.log('Paiement :', payment);
  },
  orderCallback: function(order) {
    // Fonction pour traiter la commande finalisée
    console.log('Commande :', order);
  }
});

// Créez un bouton HTML et déclenchez Shopify Checkout
const button = document.createElement('button');
button.textContent = 'Acheter maintenant';
button.addEventListener('click', function() {
  Shopify.Checkout.open({
    products: [
      { id: '9030241124681', quantity: 1 } // Remplacez 'YOUR_PRODUCT_ID' par l'ID de votre produit
    ]
  });
});

document.body.appendChild(button);

# Baza-klientow-CRM

## WSB-Projekt zaliczeniowy na przedmiot "Popularne Frameworki JavaScript"

### Installation

```

git clone git@github.com:PrzemekAbramowicz/Baza-klientow-CRM.git .

npm install

```

### Run app

 
```
npm start

```

# For Dr. Piotr Bobiński

## Opis problemów napotkanych w trakcie tworzenia projektu

### 1. Nadanie każdemu klientowi ID

```
Problem polegał na znalezieniu odpowiedniego sposobu nadawania unikalnych identyfikatorów każdemu dodanemu klientowi. Istniały trzy potencjalne rozwiązania: dodawanie ID ręcznie, dodawanie ID numerycznie (gdzie każdy nowy klient ma kolejny numer) oraz wykorzystanie identyfikatorów UUID (universally unique identifier). Ręczne nadawanie ID może prowadzić do pomyłek i nieprawidłowych przypisań, a numeryczne nadawanie może powodować problemy z powtarzającymi się lub brakującymi ID. Ostatecznie wybraliśmy identyfikatory UUID, które generują unikalne losowe ciągi znaków, trudne do zhakowania, zapewniając niepowtarzalność identyfikatorów dla każdego klienta.

```

### 2. Usuwanie klienta

```
Napotkaliśmy problem z usuwaniem klienta z bazy ze względu na to, że formularze HTML obsługują jedynie metody POST i GET. Aby rozwiązać ten problem, skorzystaliśmy z middleware o nazwie "method-override", który umożliwia nadpisywanie metody wysyłanej przez formularz. Przy użyciu tej funkcji moglismy przesłać żądanie DELETE, nawet jeśli formularz nie obsługuje tej metody. Wykorzystanie "method-override" pozwoliło nam dostarczyć RESTful API z żądaną metodą.

```

### 3. Rozróżnienie obsługi błędów użytkownika od błędów programistycznych

```
Kluczowym problemem było rozróżnienie błędów wynikających z działań użytkownika od błędów programistycznych. Aby zapewnić właściwe zarządzanie błędami, utworzyliśmy plik "errors.js". W tym pliku zdefiniowaliśmy klasę rozszerzającą "Error", która pozwala na określenie, czy błąd jest wynikiem działania użytkownika czy błędem po stronie programisty. Dzięki temu rozróżnieniu mogliśmy skutecznie kontrolować, czy błąd zostanie przekazany użytkownikowi, czy też zostanie zidentyfikowany jako problem wewnętrzny i obsłużony w odpowiedni sposób.

```
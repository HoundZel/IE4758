const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

const questionBank = [
    { question: "What is information security?", options: ["Information security is the collection of technologies, standards, policies and management practices that are applied to information to keep it secure.","It is just using technology to keep digital information secure","It is just the best policy to keep digital information secure","None of the above"], correct: "Information security is the collection of technologies, standards, policies and management practices that are applied to information to keep it secure." },
    { question: "Why is information security important?", options: ["In today's high technology environment, organisations are becoming more and more dependent on their information systems.","Due to hype in the media about information security.","The threats from traditional brick and motor criminals are on the rise.","Many organisations who are still using offline payment system are depending on information security"], correct: "In today's high technology environment, organisations are becoming more and more dependent on their information systems." },
    { question: "What are the three basic information security concepts?", options: ["Confidentiality, Integrity, Availability","Confidentiality, Integrity and Access","Consideration, Integrity, and Availability","None of the above"], correct: "Confidentiality, Integrity, Availability" },
    { question: "You visit an organization’s website and you realized that you are able to view sensitive files on their web server. Despite the fact that it is not your fault, it is still considered an information security breach.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Verifying that users are who they say they are and that each input arriving at the system came from a trusted source.", options: ["authenticity","integrity","confidentiality .","None of the above"], correct: "authenticity" },
    { question: "List the three stages in the plan-protect-respond cycle", options: ["Planning, protection, and response.","Planning, Checking and protecting","Plan, do and check","None of the above"], correct: "Planning, protection, and response." },
    { question: "In plan, protect and response cycle, which stage consumes the most time?", options: ["Protection.","Planning","Response"], correct: "Protection." },
    { question: "How is protection defined?", options: ["Protection is defined as the plan-based creation of operation and countermeasures.","To use technologies to protect against attacks","To use policy based protection to protect against attacks"], correct: "Protection is defined as the plan-based creation of operation and countermeasures." },
    { question: "How is the response defined?", options: ["Response is defined as recovery according to plan","Punish the attackers so that they don’t attack again","Attack the attackers and destroy their abilities to attack again"], correct: "Response is defined as recovery according to plan" },
    { question: "Why there is need to understand Threat Environment?", options: ["We will not be able to defend as we will not know how are the attackers and how are they going to attack us.","Business requirements make it essential to understand it.","It is requirement of information security policy, so we have no choice."], correct: "We will not be able to defend as we will not know how are the attackers and how are they going to attack us." },
    { question: "The changing nature of information security attacks is more common than the traditional attacks", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Automation, speed and action at distance are adding online attack", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Most obvious reason (s) for computer security attacks is (are):", options: ["All of the above","Privacy violations","Criminal attacks","Publicity attacks","Legal attacks"], correct: "All of the above" },
    { question: "The fabrication of information that is purported to be from someone who is not actually the author is called", options: ["Masquerading","Eavesdropping","Spoofing"], correct: "Masquerading" },
    { question: "The interruption or degradation of a data service or information access is called", options: ["Denial of service","Non-repudiation","Masquerading"], correct: "Denial of service" },
    { question: "Malware is a generic term for “evil software”", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Distinguish between viruses and worms", options: ["Virus needs a host program while worms are full program and don’t need a host program","Both are same","Worm cannot be detected by antivirus program, while virus can be detected"], correct: "Virus needs a host program while worms are full program and don’t need a host program" },
    { question: "How do most viruses spread between computers today?", options: ["Mostly via email messages, but also through thumb drives, file sharing programs, downloading infected programs from a malicious website, social networking sites.","By installing mobile applications","Hackers cracking your password"], correct: "Mostly via email messages, but also through thumb drives, file sharing programs, downloading infected programs from a malicious website, social networking sites." },
    { question: "What is a virus or worm payload?", options: ["Payloads are pieces of code that do damage","It is a virus or worm designed for mobile devices","Payload is just a computer jargon for virus"], correct: "Payloads are pieces of code that do damage" },
    { question: "What is a Logic Bomb?", options: ["Malicious codes that execute when a certain predefined events occurs.","It gives the impression that it is useful program however in reality it is harmful","A Virus which bypasses the antivirus program"], correct: "Malicious codes that execute when a certain predefined events occurs." },
    { question: "What are the likely motivations for hackers", options: ["Financial gain, publicity and espionage","They are too smart and want people to know about it","They only do it for a challenge"], correct: "Financial gain, publicity and espionage" },
    { question: "What is the definition of hacking.", options: ["Hacking is intentionally accessing a computer resource without authorization or in excess of authorization.","When you share your password with someone If you give your password to someone then it is not hacking. In any case you shouldn’t be sharing your password under any circumstances.","When you reset your password and don’t encrypt it"], correct: "Hacking is intentionally accessing a computer resource without authorization or in excess of authorization." },
    { question: "What is spyware?", options: ["Spyware refers to a broad spectrum of Trojan horse programs that gather information about you and make it available to an attacker.","When you visit a suspicious website and are infected","When you browse a website and you are infected with adware"], correct: "Spyware refers to a broad spectrum of Trojan horse programs that gather information about you and make it available to an attacker." },
    { question: "Why can cookies be dangerous?", options: ["Cookies can record too much sensitive information about you and could become spyware.","Cookies can never be dangerous"], correct: "Cookies can record too much sensitive information about you and could become spyware." },
    { question: "What is social engineering?", options: ["Social engineering attacks take advantage of flawed human judgment by convincing the victim to take actions that are counter to security policies.","Social Engineering means social networks"], correct: "Social engineering attacks take advantage of flawed human judgment by convincing the victim to take actions that are counter to security policies." },
    { question: "What is spam?", options: ["Spam is unsolicited commercial e-mail.","When your computer is infected with a ransomware"], correct: "Spam is unsolicited commercial e-mail." },
    { question: "What is phishing?", options: ["Phishing attack victims receive an email message that appears to come from a bank or another firm with which the victim does business.","Phishing means when your computer has a virus"], correct: "Phishing attack victims receive an email message that appears to come from a bank or another firm with which the victim does business." },
    { question: "How can social engineering be used to get access to a sensitive file?", options: ["Simply by asking someone to send the file or to give access to the file by tricking the user","Using brute force attack to find password"], correct: "Simply by asking someone to send the file or to give access to the file by tricking the user" },
    { question: "In developing an information security plan, what should a company do first?", options: ["It must first assess the current state of its security.","It should buy state of the art technology"], correct: "It must first assess the current state of its security." },
    { question: "Is top management support important in information security project?", options: ["Yes, as they have the power, can provide funding and normally design and enforce policy","No, because they lack the technical knowledge"], correct: "Yes, as they have the power, can provide funding and normally design and enforce policy" },
    { question: "What must top management do to demonstrate support for information security project?", options: ["Must ensure an adequate budget and follows security procedures themselves","Send email to all staff and informed them that they are supporting the project"], correct: "Must ensure an adequate budget and follows security procedures themselves" },
    { question: "What are policies?", options: ["Policies are statements of what should be done under specific circumstances.","describes the actions that are taken to place the policy guidance into operation"], correct: "Policies are statements of what should be done under specific circumstances." },
    { question: "Why policies need to be acceptable to users?", options: ["If policies are not acceptable (sensible) then users will bypass it, which is dangerous trend","So that users can modify it according to his/her need"], correct: "If policies are not acceptable (sensible) then users will bypass it, which is dangerous trend" },
    { question: "Distinguish between standards and guidelines", options: ["Standards are mandatory while guidelines are discretionary","Standard can be optional while guidelines are fixed"], correct: "Standards are mandatory while guidelines are discretionary" },
    { question: "For guidelines, what is mandatory?", options: ["It is mandatory for decision makers to consider guidelines.","Nothing is mandatory"], correct: "It is mandatory for decision makers to consider guidelines." },
    { question: "Which of the following is not an authentication factor?", options: ["Something you see","Something you have","Something you know","Something you are"], correct: "Something you see" },
    { question: "________ is the process of assessing the identity of each individual claiming to have permission to use a resource.", options: ["Authentication","Authorizations"], correct: "Authentication" },
    { question: "Reusable Passwords, regardless whether long, short, simple or complex are always easy for hackers to crack.", options: ["No","Yes"], correct: "No" },
    { question: "Using biometric technology can enhance customer trust", options: ["Yes","No"], correct: "Yes" },
    { question: "Biometric technology is about as secure as barcode cards and Personal Identification Numbers (PINs).", options: ["No","Yes"], correct: "No" },
    { question: "What is the most common type of biometrics device in use today?", options: ["Fingerprint scanners and readers","Lie detectors that measure pulse rate","Retinal scanners"], correct: "Fingerprint scanners and readers" },
    { question: "The biometric template is based on ________ generated during the enrolment scan", options: ["key features","Scan data"], correct: "key features" },
    { question: "A false acceptance occurs when a person is improperly matched to a template", options: ["Yes","No"], correct: "Yes" },
    { question: "When an attacker deliberately attempts to fool the system, this is called ________.", options: ["deception","a false acceptance","a false rejection"], correct: "deception" },
    { question: "Which of the following statements accurately describes fingerprint recognition?", options: ["Fingerprint recognition is easily deceived.","Fingerprint recognition scanners are very expensive.","Fingerprint recognition is rarely used"], correct: "Fingerprint recognition is easily deceived." },
    { question: "A scheme known as a one-time pad is unbreakable because it produces random output that bears no statistical relationship to the plaintext.", options: ["Yes","No"], correct: "Yes" },
    { question: "The process of converting from plaintext to cipher text is known as deciphering or decryption.", options: ["No","Yes"], correct: "No" },
    { question: "If both sender and receiver use the same key to encrypt and decrypt, the system is referred to as:", options: ["Symmetric key crypto system","asymmetric key crypto system","Public-key crypto system"], correct: "Symmetric key crypto system" },
    { question: "The earliest known and simplest use of a substitution cipher was called the __________ cipher and involved replacing each letter of the alphabet with the letter standing three places further down the alphabet.", options: ["Ceaser Cipher","Transposition cipher"], correct: "Ceaser Cipher" },
    { question: "When message is divided into blocks (e.g., sets of 8- or 16-bit blocks) and each is transformed into encrypted block of cipher using algorithm and key it is called", options: ["Block Cipher","Bit Stream Cipher"], correct: "Block Cipher" },
    { question: "In Poly-alphabetic substitution there is one-to-many relationship", options: ["Yes","No"], correct: "Yes" },
    { question: "Which of the following is the oldest encryption method?", options: ["Caesar cipher","PGP","Multi-alphabet encryption","Cryptic cipher"], correct: "Caesar cipher" },
    { question: "Which of the following is a symmetric key system using 64-bit blocks?", options: ["DES","RSA","PGP"], correct: "DES" },
    { question: "What advantage does a symmetric key system using 64-bit blocks have?", options: ["It is fast.","It is unbreakable","It uses asymmetric keys.","It is complex"], correct: "It is fast." },
    { question: "What size key does a DES system use?", options: ["56 bit","64 bit","128 bit","256 bit"], correct: "56 bit" },
    { question: "What is data encryption standard (DES)?", options: ["block cipher","stream cipher","bit cipher","none of the above"], correct: "block cipher" },
    { question: "Which is the largest disadvantage of the symmetric Encryption?", options: ["Problem of the secure transmission of the Secret Key.","More complex and therefore more time-consuming calculations.","Less secure encryption function.","Isn't used any more."], correct: "Problem of the secure transmission of the Secret Key." },
    { question: "What you should be most careful of when looking for an encryption method to use?", options: ["How long the algorithm has been around","Complexity of the algorithm","Veracity of the vendor’s claims","Speed of the algorithm"], correct: "How long the algorithm has been around" },
    { question: "Which of the following is most likely to be true of an encryption method that is advertised as unbreakable?", options: ["It is likely to be exaggerated.","It is probably suitable for military use.","It may be too expensive for your organization.","It is probably one you want to use."], correct: "It is likely to be exaggerated." },
    { question: "Which of the following is most true regarding certified encryption methods?", options: ["There is no such thing as certified encryption.","It depends on the source of the certification","It depends on the level of certification","These are the only methods you should use."], correct: "There is no such thing as certified encryption." },
    { question: "Which of the following is most true regarding new encryption methods?", options: ["You can use them, but you must be cautious.","Never use them until they have been proven","Only use them if they are certified.","Only use them if they are rated unbreakable."], correct: "You can use them, but you must be cautious." },
    { question: "Asymmetric encryption utilizes only a public key for encryption and decryption.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Asymmetric encryption can be used for confidentiality but not for authentication.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Public-key encryption is more secure than symmetric encryption as it uses two keys.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "The most widely used public-key cryptosystem is __________ .", options: ["RSA","DES"], correct: "RSA" },
    { question: "The Diffie-Hellman algorithm depends on the difficulty of computing discrete logarithms for its effectiveness.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Most of the products and standards that use public-key cryptography for encryption and digital signatures use RSA.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Suppose that you are using the RSA algorithm and have chosen two prime numbers, p = 5 and q = 11. What will be value of private key (d) if you have selected public encryption key, e= 9", options: ["9","13"], correct: "9" },
    { question: "In RSA algorithm, if the two prime numbers are, 5 and 11 then what will be value of Modulus, N", options: ["55","44"], correct: "55" },
    { question: "Given two large numbers p and q, a composite number N can be calculated as N = p* q. However given just N, there is no algorithm, to find p and q", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "In public key cryptosystem when Carol sends a message to Bob, what key will she use to encrypt the message?", options: ["Bob’s Public Key","Public Key","Carols’ Private Key","None of the above."], correct: "Bob’s Public Key" },
    { question: "In public key cryptosystem when Carol sends a encrypted message to Bob, what key will Bob use to decrypt the message?", options: ["Bob’s Private Key","Bob’s Public Key","Carols’ Private Key","Carol’s Public Key"], correct: "Bob’s Private Key" },
    { question: "In a classroom with 30 students and a professor, how many public and private keys will be used if all students want to submit the encrypted assignment to the professor?", options: ["1 public and 1 private","1 public and 30 private","30 public and 30 private","Variable keys depending on the application"], correct: "1 public and 1 private" },
    { question: "In asymmetric key cryptography for confidential communication, the private key is used by ------------------- to decrypt ciphertext", options: ["receiver","sender","sender and receiver","all the connected devices to the network"], correct: "receiver" },
    { question: "A __________ is a digital document issued and digitally signed by the private key of a Certification Authority that binds the name of a subscriber to a public key.", options: ["Digital certificate","Digital signature"], correct: "Digital certificate" },
    { question: "The principal object of a hash function is __________ .", options: ["data integrity","Authentication"], correct: "data integrity" },
    { question: "The most important and widely used family of cryptographic hash functions is the __________ family", options: ["Secure Hash Algorithm (SHA)","Message digest"], correct: "Secure Hash Algorithm (SHA)" },
    { question: "The hash value of a message in the __________ application is encrypted with a user's private key.", options: ["Digital signature","Digital certificate"], correct: "Digital signature" },
    { question: "A digital signature can guarantee the integrity but not the source of the message.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Unlike RSA, DSS cannot be used for encryption or key exchange.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "When a message and a digital signature (signed hash) are received, a new hash is created from the received message and compared to the original hash in the digital signature. The message has not been altered when the hash values are:", options: ["equal","not equal"], correct: "equal" },
    { question: "Digital signatures are created using a public key system. Which key does a sender use when they wish to digitally sign a hash before it is sent?", options: ["senders private key","senders public key"], correct: "senders private key" },
    { question: "The purpose of a digital certificate is to:", options: ["authenticate a public key","authenticate a private key"], correct: "authenticate a public key" },
    { question: "A special mathematical function that performs one-way encryption is called", options: ["Hashing function","Transposition cipher","Asymmetric encryption","Multiple encryption"], correct: "Hashing function" },
    { question: "You visit an organization’s website and you realized that you are able to view sensitive files on their web server. Despite the fact that it is not your fault, it is still considered a security breach.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "You logged into your organization’s e-mail system at odd hours and were still able to access your own e-mails. This is considered a security breach due to abnormality.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Mr. Lim, a student at a local University is only allowed to view his grades, however he is able to view grades of his friends as well. This attack is against the ------------------ security goal.", options: ["Confidentiality","Integrality","Availability"], correct: "Confidentiality" },
    { question: "Mr. Tan, an undergraduate student at a local University was supposed to view only his grades, however, he realized that he is able to modify some of his grades as well. Even though he tried to delete the whole file, he was not successful. This attack is against the ------------------ security goal.", options: ["Integrality","Confidentiality","Availability"], correct: "Integrality" },
    { question: "The main difference between a virus and a worm is that worm needs a host program, while virus doesn’t need a host program.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Multipartite virus can change its signature every time it infects a new file.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "__________ is a string of bits used by a cryptographic algorithm to transform plain text into cipher text or vice versa", options: ["Cryptographic key","Encryption","Asymmetric encryption","Symmetric encryption"], correct: "Cryptographic key" },
    { question: "__________ is the conversion of electronic data into another form, called “cipher text”, which cannot be easily understood by anyone except authorized parties who are able to convert it into “plaintext”.", options: ["Encryption","Asymmetric system","Cryptographic key"], correct: "Encryption" },
    { question: "Elite hackers have the least amount of technical skills while script kiddies due to their large numbers possess the best technical expertise?", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Adware is a general term to describe software that violates a user’s personal information/data.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Verifying that users are who they say they are and that each input arriving at the system came from a trusted source.", options: ["authenticity","integrity","confidentiality"], correct: "authenticity" },
    { question: "A _________ approach involves trying every possible key until an intelligible translation of the ciphertext into plaintext is obtained.", options: ["brute-force","Triple DES","block cipher"], correct: "brute-force" },
    { question: "The strength of a hash function against brute-force attacks depends solely on the length of the hash code produced by the algorithm as longer message will produce longer hash code.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "RC4 with key size of 40 is very strong and its security cannot be compromised by any attacker and that’s why it is still being used.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "In RSA system having 5 and 13 as the two prime numbers, the modulus n, can be:", options: ["None of the above","33","20"], correct: "None of the above" },
    { question: "In RSA system with p= 5 and q=13 being the two prime numbers, φ(n) , can be:", options: ["48","20","65"], correct: "48" },
    { question: "In RSA system with p= 7 and q=13 being the two prime numbers, the public key, e, can be:", options: ["5","3","6"], correct: "5" },
    { question: "In Diffie-Hellman Key exchange, the secrete integers chosen by the two users can be:", options: ["Any number randomly chosen","Must be a prime number"], correct: "Any number randomly chosen" },
    { question: "A message encrypted by Tom’s public key can be decrypted by:", options: ["Tom’s private key","Any private key","Carol’s private key"], correct: "Tom’s private key" },
    { question: "Since 3DES is based on applying DES 3 times, the key size of the 3DES = 3 * DES key = 3*56 = 168", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "On a 102 keyboard, if the length of a password is 10 digits, then the possible passwords will be:", options: ["102^10","10^102"], correct: "102^10" },
    { question: "Zero-day attack is not dangerous as the attacker is launching it first time, therefore, it has low probability of success.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "All Certification authorities are trust worthy otherwise they cannot be allowed to issue digital certificates.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Professor wants to communicate with his 30 students using symmetric key encryption, how many keys will be required in total to encrypt and decrypt the message?", options: ["30","1","60","31"], correct: "30" },
    { question: "David, Lim and John, 3 friends are using RSA asymmetric system to protect their data. How many private keys in total they need to keep secret?", options: ["3","1","6"], correct: "3" },
    { question: "Today most biometric systems are able to replace “Password” based authentication, however due to commercial pressure we are not using it on a large scale.", options: ["FALSE","TRUE"], correct: "FALSE" },
];

let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle an array (for both questions and options)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions at the start
let shuffledQuestions = shuffleArray([...questionBank]);

// Load a random question and randomize its options
function loadQuestion() {
    resetOptions();
    
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    // Shuffle options before displaying them
    let shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(optionText => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.innerText = optionText;
        optionButton.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionButton);
    });
}

function selectOption(e) {
    const selectedOption = e.target;
    const correctOption = shuffledQuestions[currentQuestionIndex].correct;

    // Highlight the correct option in green
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
        if (button.innerText === correctOption) {
            button.style.backgroundColor = "green";  // Highlight correct option
        }
    });

    // Highlight the selected option based on whether it's correct or not
    if (selectedOption.innerText === correctOption) {
        selectedOption.style.backgroundColor = "green";  // Correct answer
        score++;
    } else {
        selectedOption.style.backgroundColor = "red";  // Incorrect answer
    }

    // Disable further option clicks
    disableOptions();
    nextButton.style.display = "block";
}

function disableOptions() {
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
        button.disabled = true;
    });
}

function resetOptions() {
    nextButton.style.display = "none";
    optionsContainer.innerHTML = '';
}

nextButton.addEventListener('click', () => {
    // Move to the next question, if at the end, loop back
    currentQuestionIndex++;
    if (currentQuestionIndex >= shuffledQuestions.length) {
        // Shuffle questions again to keep it random in the next loop
        shuffledQuestions = shuffleArray([...questionBank]);
        currentQuestionIndex = 0; // Reset index to loop
    }
    loadQuestion();
});

function showResults() {
    questionContainer.innerText = `Quiz Completed! Your Score: ${score}/${shuffledQuestions.length}`;
    optionsContainer.innerHTML = '';
    nextButton.style.display = "none";
}

// Initialize quiz by loading the first question
loadQuestion();

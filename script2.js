const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const progressContainer = document.getElementById('progress');

const questionBank = [
    { question: "The result of encrypting the digest using the sender’s private key is the ________", options: ["digital signature","envelope","digest code","mail extension"], correct: "digital signature" },
    { question: "The most complex part of TLS is the __________", options: ["handshake protocol","signature","message header","payload"], correct: "handshake protocol" },
    { question: "_______ is a list that contains the combinations of cryptographic algorithms supported by theclient", options: ["Cipher Suite","Compression method","Session ID","All of the above"], correct: "Cipher Suite" },
    { question: "The SSL record protocol provides two services for SSL/TLS connection: message integrity and_________", options: ["Confidentiality","Availability","Authentication","None of the above"], correct: "Confidentiality" },
    { question: "The _________ is used to convey SSL-related alerts to the peer entity", options: ["alert protocol","digital signature","Digital certificate","None of the above"], correct: "alert protocol" },
    { question: "A _________ is formed by taking the message digest of the content to be signed and then encrypting that with the private key of the signer.", options: ["digital signature","alert protocol","Session ID","None of the above"], correct: "digital signature" },
    { question: "X.509 provides a format for use in revoking a key before it expires", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "_______ is the process whereby a user first makes itself known to a CA prior to that CA issuinga certificate or certificates for that user.", options: ["Registration","Authorization","Certification","Initialization"], correct: "Registration" },
    { question: "Most browsers come equipped with TLS/SSL and most Web servers have implemented theprotocol", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Update is not required when the digital certificate lifetime expires or as a result of certificaterevocation", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "One of the protection used against the cyber-attack is to scan the packets according to set rules and this is called", options: ["Firewall","Wireless router","Key logger"], correct: "Firewall" },
    { question: "A ------------------- helps screen out hackers, viruses, and worms that try to reach your computer over the Internet", options: ["Firewall","Computer","Internet"], correct: "Firewall" },
    { question: "When a user uses his/her browser to access a website which uses “http” protocol, all the data is encrypted", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "In SSL, Hashing is used for ----------------", options: ["Integrity","Confidentiality","Availability"], correct: "Integrity" },
    { question: "SSL is normally used for consumer authentication so that it can detect the stolen credit card during the online payment process", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "--------- provides assurance that the public key user is claiming does belong to him/her", options: ["Digital certificate","Digital rights and bills","Digital tolerance protocol"], correct: "Digital certificate" },
    { question: "A ------------------ firewall tracks the operating state of entire network connections.", options: ["Stateful packet inspection","Distributed","Host-based"], correct: "Stateful packet inspection" },
    { question: "An interruption in an authorized user's access to a computer network, typically one caused with malicious intent is called --------------", options: ["DOS attack","A virus attack","Hoax Attack"], correct: "DOS attack" },
    { question: "---------- attack is one in which a multitude of compromised systems attack a single target, thereby causing denial of service for users of the targeted system", options: ["DDoS","directly-propagating worm"], correct: "DDoS" },
    { question: "Today most border firewalls are static packet filtering firewalls as they are secure and protect us from most attacks", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Signature based ID works on similar concept like anti-virus program and it needs regular updating of signature database", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "A firewall installed on your computer cannot protect the user from malicious attacks coming via email", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Intrusion detection system have many false positives", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "A network-based intrusion detection system (NIDS) only protects the host on which it is installed", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Login failure and login at irregular hours can be detected by -------------", options: ["HIDS","Anti-virus","NIDS","AIDS"], correct: "HIDS" },
    { question: "What are criteria’s of choosing a firewall?", options: ["Both A and B","Product features","Vendor reputation"], correct: "Both A and B" },
    { question: "The current form of digital cash is not anonymous", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Server-based digital wallets are popular as users don’t have to install additional software and it is easy to use", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Due to shift towards mobile technology mobile digital wallets have become popular and soon it will replace the real cash", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "When a stolen credit card is used for offline shopping the ------- has to bear the actual cost", options: ["payment gateway","Merchant","Consumer","Consumer bank"], correct: "payment gateway" },
    { question: "When a stolen credit card is used for online shopping the ------- has to bear the actual cost", options: ["Merchant","Consumer","payment gateway","Consumer bank"], correct: "Merchant" },
    { question: "In a DoS attack the attacker is sending packets of 1000 bytes in size to flood a target organization. How many packets should be sent by the attacker to launch a successful DoS attack on a 2 Mbps link?", options: ["250 packets per second","3000 packets per second","2500 packets per second"], correct: "250 packets per second" },
    { question: "Information security solutions based on strong policy only will always fail", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Information security solutions based on modern technology only will always fail", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "The firewall may be a single computer system or a set of two or more systems that cooperate to perform the firewall function.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "A traditional packet filter makes filtering decisions on an individual packet basis and does not take into consideration any higher layer context", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "The _________ is inserted between the premises network and the Internet to establish a controlled link and to erect an outer security wall or perimeter to protect the premises network from Internet-based attacks.", options: ["Firewall","Session ID","IP protocol field","All of the above"], correct: "Firewall" },
    { question: "A _________ applies a set of rules to each incoming and outgoing IP packet and then forwards or discards the packet.", options: ["packet filtering firewall","IP protocol field","Both of the above","None of the above"], correct: "packet filtering firewall" },
    { question: "An intruder transmitting packets from the outside with a source IP address field containing an address of an internal host is known as IP address _________.", options: ["spoofing","authentication","generation","None of the above"], correct: "spoofing" },
    { question: "Identified as a critical strong point in the network’s security, the _________ serves as a platform for an application-level or circuit-level gateway", options: ["bastion host","packet filtering firewall","virtual private network","None of the above"], correct: "bastion host" },
    { question: "A __________ firewall controls the traffic between a personal computer or workstation on one side and the Internet or enterprise network on the other side", options: ["personnel","poxy server","application level gateway","None of the above"], correct: "personnel" },
    { question: "_________ control determines the direction in which particular service requests may be initiated and allowed to flow through the firewall", options: ["Direction","Behaviour","User","Service"], correct: "Direction" },
    { question: "Typically, the systems in the _________ require or foster external connectivity such as a corporate Web site, an e-mail server, or a DNS server", options: ["DMZ","boundary firewall","VPN","IP protocol field"], correct: "DMZ" },
    { question: "The firewall can protect against attacks that bypass the firewall", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Intrusion detection is based on the assumption that the behaviour of the intruder differs from that of a legitimate user in ways that can be quantified", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Signature-based approaches attempt to define normal, or expected behaviour, whereas anomaly approaches attempt to define proper behaviour", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "A _________ monitors the characteristics of a single host and the events occurring within that host for suspicious activity", options: ["host-based IDS","security intrusion","network-based IDS","None of the above"], correct: "host-based IDS" },
    { question: "A ________ monitors network traffic for particular network segments or devices and analyzes network, transport, and application protocols to identify suspicious activity", options: ["network-based IDS","security intrusion","host-based IDS","None of the above"], correct: "network-based IDS" },
    { question: "__________ involves an attempt to define a set of rules or attack patterns that can be used to decide if a given behaviour is that of an intruder.", options: ["Anomaly detection","Threshold detection","Signature detection","Profile based detection"], correct: "Anomaly detection" },
    { question: "_________ involves the collection of data relating to the behaviour of legitimate users over a period of time.", options: ["Anomaly detection","Threshold detection","Signature detection","Profile based detection"], correct: "Anomaly detection" },
    { question: "A denial-of-service attack is an attempt to compromise availability by hindering or blocking completely the provision of some service.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Using forged source addresses is known as _________.", options: ["source address spoofing","a three-way address","random dropping","directed broadcast"], correct: "source address spoofing" },
    { question: "TCP uses the _______ to establish a connection.", options: ["three-way handshake","directed broadcast","SYN cookie","zombie"], correct: "three-way handshake" },
    { question: "In a _______ attack the attacker creates a series of DNS requests containing the spoofed source address for the target system.", options: ["DNS amplification","SYN flood","poison packet","UDP flood"], correct: "DNS amplification" },
    { question: "DoS attacks always cause physical damage or destruction to IT infrastructures", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "The source of the attack is explicitly identified in the classic ping flood attack", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "______ relates to the capacity of the network links connecting a server to the wider Internet", options: ["Network bandwidth","Directed broadcast","System payload","Application resource"], correct: "Network bandwidth" },
    { question: "When a DoS attack is detected, the first step is to _______.", options: ["identify the attack","analyse the response","design blocking filters","shut down the network"], correct: "identify the attack" },
    { question: "_____ attacks flood the network link to the server with a torrent of malicious packets competing with valid traffic flowing to the server.", options: ["Flooding","Spoofing","Identity","None of the above"], correct: "Flooding" },
    { question: "A _______ flood refers to an attack that bombards Web servers with HTTP requests.", options: ["HTTP","SYN","PING","None of the above"], correct: "HTTP" },
    { question: "SYN-ACK and ACK packets are transported using IP, which is an unreliable network protocol", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "During a ______ attack, the attacker sends packets to a known service on the intermediary with a spoofed source address of the actual target system and when the intermediary responds, the response is sent to the target.", options: ["Reflection","Direct","Replicating","None of the above"], correct: "Reflection" },
    { question: "In reflection attacks, the ______ address directs all the packets at the desired target and any responses to the intermediary.", options: ["spoofed source","direct","real","None of the above"], correct: "spoofed source" },
    { question: "A DOS attack is an action that prevents or impairs the authorized use of networks, systems, or applications by exhausting resources such as central processing units, memory, bandwidth, and disk space.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "If a firewall receives a provable attack packet, the firewall will ________.", options: ["Both a and b","drop the packet","log the packet"], correct: "Both a and b" },
    { question: "If a firewall receives a suspicious packet, the firewall will ________.", options: ["Neither a nor b","drop the packet","log the packet"], correct: "Neither a nor b" },
    { question: "In ingress filtering, the firewall examines packets entering the network from the outside, typically from the Internet.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "SPI firewalls can conduct ________ inspection.", options: ["Both a and b","static packet filtering","stateful packet"], correct: "Both a and b" },
    { question: "A connection opening is a state.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Most packets are part of the ________ state.", options: ["Neither a nor b","connection closing","connection opening"], correct: "Neither a nor b" },
    { question: "An application proxy firewall needs to have multiple proxy programs if it is to filter multiple application protocols.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Firewall policies should govern ________.", options: ["Both a and b","Configuration","Testing"], correct: "Both a and b" },
    { question: "Screened host firewall provides double protection compared to packet filtering firewall", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Designed to lure a potential attacker away from critical systems ____________ are decoy systems that divert an attacker from accessing critical systems, collect information about the hacker's activity, and encourage the attacker to stay on the system long enough for administrators to respond.", options: ["Honey Pots","Hybrid server"], correct: "Honey Pots" },
    { question: "Unauthorized intrusion into a computer system or network is one of the most serious threats to computer securit", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Intrusion detection involves detecting unusual patterns of activity or patterns of activity that are known to correlate with intrusions.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "To be of practical use an intrusion detection system should detect a substantial percentage of intrusions while keeping the false alarm rate at an acceptable level", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "_________ systems have been developed to provide early warning of an intrusion so that defensive action can be taken to prevent or minimize damage", options: ["Intrusion Detection","Cryptographic"], correct: "Intrusion Detection" },
    { question: "________ techniques detect intrusion by observing events in the system and applying a set of rules that lead to a decision regarding whether a given pattern of activity is or is not suspicious", options: ["Anomaly detection","Misuse detection"], correct: "Anomaly detection" },
    { question: "Host based ID provides coverage to the entire network as it is visible to all network traffic", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Signature based ID system can stop “Zero” day attacks as it can detect new abnormal attacks", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "One of the disadvantage of network based ID is that it does not know about activity on the hosts", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "A DoS attack makes a server or network unavailable by flooding it with attack packets.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "The ultimate goal of a DoS attack is to ________", options: ["cause harm","frustrate users"], correct: "cause harm" },
    { question: "DoS attacks can cause harm by ________.", options: ["stopping a critical service","enhancing a service"], correct: "stopping a critical service" },
    { question: "A direct attack occurs when an attacker tries to flood a victim with a stream of packets directly from the attacker's computer.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "An indirect attack occurs when an attacker tries to flood a victim with a stream of packets directly from the attacker's computer.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Similar to a direct attack, an indirect attack occurs when an attacker spoofs his/her IP address", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "________ attack is when a victim is flooded with SYN packets in an attempt to make many half-open TCP connections", options: ["SYN flood","Ping flood"], correct: "SYN flood" },
    { question: "A ________ attack is when a victim is flooded with ICMP packets that appear to be normal supervisory traffic", options: ["Ping flood","SYN flood"], correct: "Ping flood" },
    { question: "An attacker controlling bots in a coordinated attack against a victim is known as a ________", options: ["DDoS attack","DoS attack"], correct: "DDoS attack" },
    { question: "In a reflected DoS attack, attackers send spoofed requests to legitimate servers. The servers then send all responses to the victim.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "SSL/TLS used in online credit card payment system does not guarantee server-side authentication", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "In order to accept payments by credit card, online merchants must have a merchant account established with a bank or financial institution.", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "All of the following are limitations of the existing online credit card payment system except:", options: ["Cost to consumers","Poor security","Cost to merchant"], correct: "Cost to consumers" },
    { question: "Which of the following is commonly used by some banks in Singapore to make online credit card payment process more secure", options: ["two-factor authentication","anti-virus software"], correct: "two-factor authentication" },
    { question: "Despite various online payment systems, the primary form of online payment is: ________", options: ["Credit cards","Google Wallet"], correct: "Credit cards" },
    { question: "The most common form of securing an online payment system in use is : ________.", options: ["SSL/TLS","SET"], correct: "SSL/TLS" },
    { question: "A ________ is similar to a credit card; however it contains an embedded microprocessor and uses electronic cash which transfers from the consumers’ card to the sellers’ device.", options: ["Contactless smart card","Identity document"], correct: "Contactless smart card" },
    { question: "There are companies that enable financial transactions to transpire over the internet, such as ________.", options: ["PayPal","Skype"], correct: "PayPal" },
    { question: "Digital cash is legal tender that is instantly convertible into other forms of value without the intermediation of any third parties.", options: ["FALSE","TRUE"], correct: "FALSE" },
    { question: "Bitcoins are an example of:", options: ["Digital cash","Physical currency"], correct: "Digital cash" },
    { question: "The main reason e-wallets have not replaced the physical wallets is lack of one common international standard", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Cybercrime is basically criminal activity done by using computers and the internet", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Identity Theft is a type of crime in which personal information is stolen to commit cybercrimes", options: ["TRUE","FALSE"], correct: "TRUE" },
    { question: "Which of the following is NOT an example of cyber terrorism?", options: ["Hackers leak information on a public website","Terrorist group hacks into Google and redirect searches so that the public cannot view anti-terrorist news"], correct: "Hackers leak information on a public website" },
    { question: "What are the social characteristic of a cyber-terrorist", options: ["Radical","Antisocial"], correct: "Radical" },
    { question: "What usually form a part of information warfare", options: ["Information attack on information process","Psychological operation"], correct: "Information attack on information process" },

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

    // Display progress
    progressContainer.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
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
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionContainer.innerText = `Quiz Completed! Your Score: ${score}/${shuffledQuestions.length}`;
    optionsContainer.innerHTML = '';  // Clear options
    nextButton.style.display = "none";  // Hide the next button
}

// Initialize quiz by loading the first question
loadQuestion();
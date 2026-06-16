/* ===== Deciplan Admin ===== */
var ADMIN_PASSWORD = "deciplan2026";  // ⚠️ CHANGEZ CE MOT DE PASSE

var DEFAULT_ECOLES = [{"nom": "UM6P — FMS (Faculté Médecine et Sciences de la Santé)", "cat": "Médecine & Santé", "villes": "Benguerir", "ouv": null, "clo": "2026-06-24", "lien": "https://www.um6p.ma/fms", "modalite": "Sélection + concours", "concours": null, "avis": null, "note": "Médecine, Pharmacie, Soins Infirmiers, Kinésithérapie", "id": "e373248"}, {"nom": "UM6P — EMINES (School of industrial management)", "cat": "Ingénierie", "villes": "Benguerir", "ouv": null, "clo": "2026-06-01", "lien": "https://www.emines-ingenieur.org", "modalite": "Sélection + concours", "concours": null, "avis": null, "note": "Sciences & Technologie. Génie des mines, énergie, matériaux.", "id": "e179968"}, {"nom": "UM6P — Computer Sciences", "cat": "Ingénierie", "villes": "Benguerir", "ouv": null, "clo": "2026-06-24", "lien": "https://www.um6p.ma/cs", "modalite": "Sélection + concours", "concours": null, "avis": null, "note": "Informatique, Intelligence Artificielle, Data Science", "id": "e180160"}, {"nom": "UM6P — Systèmes Agri-Environnementaux", "cat": "Agronomie", "villes": "Benguerir", "ouv": null, "clo": "2026-06-24", "lien": "https://www.um6p.ma/agri", "modalite": "Sélection + concours", "concours": null, "avis": null, "note": "Agronomie, environnement, systèmes agricoles durables", "id": "e180416"}, {"nom": "UM6P — IST&I (Génie Chimique, Minéralogie & Biotechnologie)", "cat": "Ingénierie", "villes": "Benguerir", "ouv": null, "clo": "2026-06-24", "lien": "https://www.um6p.ma/isti", "modalite": "Sélection + concours", "concours": null, "avis": null, "note": "Génie Chimique, Minéralogie et Biotechnologie.", "id": "e180672"}, {"nom": "UM6P — SAP+D (Architecture & Design)", "cat": "Architecture", "villes": "Benguerir", "ouv": null, "clo": "2026-04-20", "lien": "https://www.um6p.ma/sapd", "modalite": "Sélection + concours", "concours": "09 Mai 2026", "avis": null, "note": "Architecture, urbanisme, design. Dossier + portfolio artistique.", "id": "e180928"}, {"nom": "UM6P — SASE (Applied Sciences & Business)", "cat": "Science & Technologie", "villes": "Benguerir", "ouv": null, "clo": "2026-04-20", "lien": "https://www.um6p.ma/sase", "modalite": "Sélection + concours", "concours": null, "avis": null, "note": "Sciences appliquées et business. Pôle Science & Technologie UM6P.", "id": "e181248"}, {"nom": "UM6P — SHBM (Hospitality Business & Management)", "cat": "Commerce & Gestion", "villes": "Benguerir", "ouv": null, "clo": "2026-04-20", "lien": "https://www.um6p.ma/shbm", "modalite": "Sélection + concours", "concours": "25 Avril 2026 (en ligne)", "avis": null, "note": "Hôtellerie, management, restauration. Toutes séries bac.", "id": "e181504"}, {"nom": "UM6P — FGSES (Économie, Sciences Politiques & Relations Internationales)", "cat": "Sciences Po", "villes": "Benguerir", "ouv": null, "clo": "2026-03-15", "lien": "https://www.um6p.ma/fgses", "modalite": "Épreuve Orale", "concours": "11-12-18-19 Avril 2026", "avis": null, "note": "Économie, Sciences Politiques, Relations Internationales. Toutes séries bac. Dossier + entretien oral.", "id": "e181760"}, {"nom": "FMP / FMD — Facultés Médecine, Pharmacie & Odontologie", "cat": "Médecine & Santé", "villes": "Rabat, Casablanca, Fès, Marrakech, Oujda, Tanger, Agadir, Béni Mellal", "ouv": null, "clo": null, "lien": "https://www.cursussup.gov.ma", "modalite": "Sélection + écrit (Bio, PC, Chimie, Maths)", "concours": "En attente", "avis": null, "note": "Bac Maths/SVT/PC. 75% national + 25% régional. Concours commun. Dates à confirmer.", "id": "e180864"}, {"nom": "ENCG — Écoles Nationales de Commerce et Gestion", "cat": "Commerce & Gestion", "villes": "Casablanca, Agadir, Fès, Oujda, Marrakech, Tanger, Séttat, El Jadida, Béni Mellal, Meknès, Dakhla", "ouv": null, "clo": null, "lien": "https://www.cursussup.gov.ma", "modalite": "Sélection + écrit (TAFEM)", "concours": "En attente", "avis": null, "note": "Toutes séries bac. 75% national + 25% régional. Test TAFEM. 11 villes. Dates à confirmer.", "id": "e182400"}, {"nom": "ENSA — Écoles Nationales des Sciences Appliquées", "cat": "Ingénierie", "villes": "Tanger, Tétouan, Agadir, Marrakech, Béni Mellal, Safi, Khouribga, Al Hoceima, El Jadida, Berrechid, Oujda, Fès, Kénitra, Laâyoune", "ouv": null, "clo": null, "lien": "https://www.cursussup.gov.ma", "modalite": "Sélection + écrit (CNC)", "concours": "En attente", "avis": null, "note": "Bac Maths/PC/Tech. 75% national + 25% régional. Accès S3 via CNC. 14 villes. Dates à confirmer.", "id": "e182976"}, {"nom": "ENSAM — Écoles Nationales Supérieures des Arts et Métiers", "cat": "Ingénierie", "villes": "Meknès, Casablanca, Rabat", "ouv": null, "clo": null, "lien": "https://www.cursussup.gov.ma", "modalite": "Sélection + écrit (CNC)", "concours": "En attente", "avis": null, "note": "Bac Maths/PC/Tech. Génie mécanique, électrique, industriel, IA. 3 villes. Dates à confirmer.", "id": "e183616"}, {"nom": "EST — Écoles Supérieures de Technologie", "cat": "Technologie", "villes": "Casablanca, Fès, Salé, Meknès, Agadir, Safi, El Jadida, Kénitra, Oujda, Béni Mellal, Laâyoune, Dakhla, Al Hoceima, Tétouan, Nador, Guelmim", "ouv": null, "clo": null, "lien": "https://www.cursussup.gov.ma", "modalite": "Sélection sur dossier bac", "concours": "En attente", "avis": null, "note": "Bac scientifique ou équivalent. DUT 2 ans. 16 villes. Dates à confirmer.", "id": "e183872"}, {"nom": "FAR — Forces Armées Royales : Officiers (ARM, ERA, ERN)", "cat": "Militaire", "villes": "Meknès (ARM), Marrakech (ERA), Casablanca (ERN)", "ouv": null, "clo": "2026-05-29", "lien": "https://recrutement.far.ma", "modalite": "Sélection + écrit + tests médicaux + oral phys.", "concours": null, "avis": null, "note": "Bac Maths/PC (ERA/ERN) ou toutes séries (ARM). Âge 18-22 ans, célibataire.", "id": "e217408"}, {"nom": "FAR — Forces Armées Royales : Sous-Officiers (Forces terrestres, ERA, ERN)", "cat": "Militaire", "villes": "Divers centres (Forces terrestres), Marrakech (ERA), Casablanca (ERN)", "ouv": null, "clo": "2026-05-29", "lien": "https://recrutement.far.ma", "modalite": "Sélection + tests médicaux + phys.", "concours": null, "avis": null, "note": "Bac scientifique. Âge 18-23 ans (16 août).", "id": "e217728"}, {"nom": "ERSSM — Santé Militaire (Médecine, Pharmacie, Dentaire)", "cat": "Militaire", "villes": "Rabat", "ouv": null, "clo": "2026-05-29", "lien": "https://recrutement.far.ma", "modalite": "Sélection + écrit + tests médicaux + phys.", "concours": null, "avis": "avis/erssm_2026.pdf", "note": "Bac SM/SVT/PC. Âge 18-22 ans.", "id": "e218048"}, {"nom": "Forces Auxiliaires — Officiers", "cat": "Militaire", "villes": "Meknès", "ouv": null, "clo": "2026-05-29", "lien": "https://recrutement.fa.gov.ma", "modalite": "Sélection + tests médicaux + phys.", "concours": null, "avis": "avis/forces_aux_2026.pdf", "note": "Bac toutes séries. Âge 18-22 ans.", "id": "e218304"}, {"nom": "Gendarmerie Royale — Élève Gendarme", "cat": "Militaire", "villes": "Plusieurs centres nationaux", "ouv": "2026-03-25", "clo": "2026-04-15", "lien": "https://recrutement.gr.ma", "modalite": "Sélection + écrit + aptit. phys. + médical", "concours": null, "avis": "avis/Gendarme_2026.pdf", "note": "Bac toutes séries. Âge 18-24 ans, célibataire.", "id": "e218560"}, {"nom": "ESBA — École Supérieure des Beaux Arts", "cat": "Art & Design", "villes": "Casablanca", "ouv": null, "clo": "2026-05-31", "lien": null, "modalite": "Écrit + Oral", "concours": "Septembre", "avis": "avis/ESBA_2026.pdf", "note": "Envoi du dossier d'inscription par voie postale.", "id": "e218880"}, {"nom": "IFTL — Institut de Formation aux Métiers du Transport et de la Logistique", "cat": "Transport & Logistique", "villes": "Nouaceur (Casablanca)", "ouv": null, "clo": "2026-06-30", "lien": "https://iftl.ma/inscription-en-ligne/", "modalite": "Sélection sur dossier + concours", "concours": "Après résultats Bac", "avis": null, "note": "Technicien Spécialisé Bac+2 : Logistique, Transport, E-commerce, Maritime. Frais dossier : 150 DH. Toutes séries bac.", "id": "e219264"}, {"nom": "OFPPT — Technicien Spécialisé", "cat": "Formation Professionnelle", "villes": "Plusieurs villes", "ouv": "2026-05-06", "clo": "2026-07-27", "lien": "https://www.myway.ac.ma/fr", "modalite": "Sélection", "concours": "Après clôture des dossiers", "avis": null, "note": "Nombreuses filières disponibles dans tous les secteurs.", "id": "e219520"}, {"nom": "OFPPT — Technicien (Niveau Bac)", "cat": "Formation Professionnelle", "villes": "Plusieurs villes", "ouv": "2026-05-06", "clo": "2026-07-07", "lien": "https://www.myway.ac.ma/fr", "modalite": "Concours écrit", "concours": "Après clôture des dossiers", "avis": null, "note": "Niveau 1ère Bac requis. Durée 2 ans.", "id": "e219776"}, {"nom": "OFPPT — Qualification (Niveau 3ème)", "cat": "Formation Professionnelle", "villes": "Plusieurs villes", "ouv": "2026-05-06", "clo": "2026-06-09", "lien": "https://www.myway.ac.ma/fr", "modalite": "Concours écrit", "concours": "Après clôture des dossiers", "avis": null, "note": "Niveau 3ème année collège requis.", "id": "e220032"}, {"nom": "IFMIA Casablanca — Technicien Spécialisé (Industrie Automobile)", "cat": "Formation Professionnelle", "villes": "Casablanca", "ouv": null, "clo": "2026-07-16", "lien": "https://www.ifmia-sa.ma", "modalite": "Présélection sur dossier + concours écrit", "concours": "21 et 22 Juillet 2026", "avis": "avis/ifmia-casa-tech-specialise.png", "note": "4 filières : Génie Mécanique · Systèmes Automatisés · Maintenance Automobile · Électromécanique. Résultats présélection : 17/07. Bac scientifique/technique. Email : inscription@ifmia-sa.ma", "id": "e220288"}, {"nom": "ISPITS — Instituts Supérieurs des Professions Infirmières et Techniques de Santé", "cat": "Médecine & Santé", "villes": "Rabat, Casablanca, Fès, Marrakech, Oujda, Agadir, Tanger, Meknès, Béni Mellal, Settat, Errachidia", "ouv": null, "clo": null, "lien": "https://www.sante.gov.ma", "modalite": "Sélection sur dossier + concours", "concours": "En attente", "avis": null, "note": "Bac scientifique. Infirmier polyvalent, sage-femme, techniciens de santé. Licence 3 ans. 23 instituts au Maroc.", "id": "e220608"}, {"nom": "FST — Facultés des Sciences et Techniques", "cat": "Science & Technologie", "villes": "Settat, Mohammedia, Fès, Marrakech, Tanger, Errachidia, Béni Mellal, Al Hoceima", "ouv": null, "clo": null, "lien": "https://www.cursussup.gov.ma", "modalite": "Sélection sur dossier (bac)", "concours": "En attente", "avis": null, "note": "Bac scientifique/technique. MIP, BCG, GE. Accès aux cycles ingénieurs. 8 villes.", "id": "e221056"}, {"nom": "ENADS — École Nationale de l'Architecture", "cat": "Architecture", "villes": "Rabat, Fès, Marrakech, Tétouan, Agadir", "ouv": null, "clo": null, "lien": "https://www.archi.ac.ma", "modalite": "Sélection sur dossier + concours", "concours": "En attente", "avis": null, "note": "Bac scientifique/technique. Diplôme d'architecte (6 ans). Concours national. 5 villes.", "id": "e221632"}];
var DEFAULT_ETUS = [{"id": "basma", "identifiant": "basma", "mot_de_passe": "basma2026", "nom": "BOUHIR", "prenom": "BASMA", "photo": "photos/basma.jpg", "photo_b64": "", "cin": "BL187103", "cne": "R149159741", "email": "basmabouhir08@gmail.com", "date_naissance": "03/11/2008", "telephone": null, "ville": "CASABLANCA", "serie_bac": "Sciences Physiques", "academie": "CASABLANCA-SETTAT", "annee_bac": 2026, "notes": {"an1_s1": 14.43, "an1_s2": 14.82, "moy_an1": 14.62, "moy_regional": null, "an2_s1": 17.53, "an2_s2": null, "moy_an2": null, "moy_nationale": null, "moy_gen_bac": null}, "remarque_conseiller": "Dossier suivi par M. Mustapha Abounaim — Conseiller d'orientation · Casablanca", "candidatures": [{"ecole": "UM6P — FMS : Licence Soins Infirmiers (Infirmier Polyvalent)", "groupe": "UM6P — FMS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 1 — très accessible avec profil PC/SVT.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "myh9qt6"}, {"ecole": "UM6P — FMS : Licence en Kinésithérapie", "groupe": "UM6P — FMS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 2 — bonne option santé.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "m9hj2np"}, {"ecole": "UM6P — FMS : Doctorate in Medicine (100% English)", "groupe": "UM6P — FMS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 3 — niveau anglais à confirmer.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "qhs9szb"}, {"ecole": "UM6P — FMS : Doctorate in Pharmacy (100% English)", "groupe": "UM6P — FMS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 4 — très sélectif.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "mz4bucj"}, {"ecole": "UM6P — Agri : Ingénieur Systèmes Agro-Environnementaux (BAC+5)", "groupe": "UM6P — Agri", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 5 — cycle préparatoire intégré.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "2fp2b4m"}, {"ecole": "UM6P — IST&I : Ingénieur Génie Chimique, Minéralogique et Biotechnologique", "groupe": "UM6P — IST&I", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 6 — cycle préparatoire intégré.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "vihkgld"}, {"ecole": "UM6P — CS : Ingénieur Computer Sciences (BAC+5)", "groupe": "UM6P — CS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 7 — très sélectif, profil scientifique fort requis.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "r3yn07c"}, {"ecole": "OFPPT — Technicien Spécialisé (Bac+2)", "groupe": "OFPPT", "ville": "Plusieurs villes", "lien": "https://candidature.ofppt.ma", "num_dossier": null, "date_inscription": "2026-05-06", "date_concours": null, "date_resultats": null, "statut": "en_cours", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Niveau Bac+2. Inscription ouverte le 06/05.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "nw9bvca"}, {"ecole": "OFPPT — Technicien (Niveau Bac)", "groupe": "OFPPT", "ville": "Plusieurs villes", "lien": "https://candidature.ofppt.ma", "num_dossier": null, "date_inscription": "2026-05-06", "date_concours": null, "date_resultats": null, "statut": "en_cours", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Niveau Bac. Inscription ouverte le 06/05.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "sic68ud"}, {"ecole": "OFPPT — Qualification (Niveau 3ème)", "groupe": "OFPPT", "ville": "Plusieurs villes", "lien": "https://candidature.ofppt.ma", "num_dossier": null, "date_inscription": "2026-05-06", "date_concours": null, "date_resultats": null, "statut": "en_cours", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Niveau 3ème. Inscription ouverte le 06/05.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "hc04456"}, {"ecole": "IFMIA Casablanca — Technicien Spécialisé (Industrie Automobile)", "groupe": "IFMIA", "ville": "Casablanca", "lien": "https://www.ifmia-sa.ma", "num_dossier": null, "date_inscription": null, "date_cloture": "2026-07-16", "date_concours": "2026-07-21", "date_resultats": "2026-07-17", "statut": "en_cours", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "4 filières : Génie Mécanique · Systèmes Automatisés · Maintenance Automobile · Électromécanique. Clôture : 16/07 à 12h.", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "rqfmklf"}]}, {"id": "chaimaa", "identifiant": "chaimaa", "mot_de_passe": "chaimaa2026", "nom": "AIT HAMMOU", "prenom": "CHAIMAA", "photo": "photos/chaimaa.jpg", "photo_b64": "", "cin": "BM62339", "cne": "R142142161", "email": "chaimaechaimae305@gmail.com", "date_naissance": "08/05/2008", "telephone": "0678495873", "ville": "CASABLANCA", "serie_bac": "Sciences Physiques", "academie": "CASABLANCA-SETTAT", "annee_bac": 2026, "notes": {"an1_s1": 13.4, "an1_s2": 14.89, "moy_an1": 14.14, "moy_regional": 13.55, "an2_s1": 16.31, "an2_s2": null, "moy_an2": null, "moy_nationale": null, "moy_gen_bac": null}, "remarque_conseiller": "Dossier suivi par M. Mustapha Abounaim — Inspecteur d'orientation · Casablanca", "candidatures": [{"ecole": "UM6P — SASE : Bachelor of Science in Applied Sciences and Business", "groupe": "UM6P — SASE", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 1", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "uawkrtg"}, {"ecole": "UM6P — FMS : Doctorate in Medicine (100% English)", "groupe": "UM6P — FMS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 2", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "s9az1vk"}, {"ecole": "UM6P — FMS : Doctorate in Pharmacy (100% English)", "groupe": "UM6P — FMS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 3", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "p62s78a"}, {"ecole": "UM6P — Agri : Cycle Ingénieur en Systèmes Agro-Environnementaux (BAC+5)", "groupe": "UM6P — Agri", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 4 — cycle préparatoire intégré", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "0gytjwi"}, {"ecole": "UM6P — IST&I : Cycle Ingénieur en Génie Chimique, Minéralogique et Biotechnologique", "groupe": "UM6P — IST&I", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 5 — cycle préparatoire intégré", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "6odxqht"}, {"ecole": "UM6P — CS : Cycle Ingénieur en Computer Sciences (BAC+5)", "groupe": "UM6P — CS", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 6 — cycle préparatoire intégré", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "fal5976"}, {"ecole": "UM6P — SHBM : Bachelor Hospitality Business and Management (100% English)", "groupe": "UM6P — SHBM", "ville": "Benguerir", "lien": "https://um6p-firsi.eudonet.com", "num_dossier": null, "date_inscription": "2026-04-20", "date_concours": null, "date_resultats": null, "statut": "inscrit", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Choix 7", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "n0f7xx6"}, {"ecole": "ISCAE — Institut Supérieur de Commerce et d'Administration des Entreprises", "groupe": "ISCAE", "ville": "Casablanca", "lien": "https://www.groupeiscae.ma", "num_dossier": null, "date_inscription": null, "date_concours": null, "date_resultats": null, "statut": "en_cours", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Concours d'accès", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "mpdcymo"}, {"ecole": "CPGE — Classes Préparatoires aux Grandes Écoles", "groupe": "CPGE", "ville": "Plusieurs villes", "lien": "https://massarservice.men.gov.ma/moutamadris/Account", "num_dossier": null, "date_inscription": "2026-06-06", "date_concours": null, "date_resultats": null, "statut": "en_cours", "liste_principale": null, "attente_1": null, "attente_2": null, "attente_3": null, "note_conseiller": "Sélection sur dossier via Massar", "portail_id": "", "portail_mdp": "", "recu_lien": "", "_id": "bu4oimh"}]}];

var CATS=["Médecine & Santé","Ingénierie","Agronomie","Architecture","Science & Technologie","Commerce & Gestion","Sciences Po","Technologie","Militaire","Art & Design","Transport & Logistique","Formation Professionnelle","Classes Préparatoires"];
var STLIST=[
  {v:"inscrit",l:"📝 Inscrit",bg:"#dbeafe",tx:"#1e40af"},
  {v:"preselect",l:"📋 Présélectionné",bg:"#e0e7ff",tx:"#3730a3"},
  {v:"convoque",l:"📅 Convoqué",bg:"#ede9fe",tx:"#5b21b6"},
  {v:"principale",l:"🏆 Liste principale",bg:"#d1fae5",tx:"#065f46"},
  {v:"attente_1",l:"🟡 1ère attente",bg:"#fef3c7",tx:"#92400e"},
  {v:"attente_2",l:"🟠 2ème attente",bg:"#ffedd5",tx:"#9a3412"},
  {v:"attente_3",l:"🔶 3ème attente",bg:"#fee2e2",tx:"#991b1b"},
  {v:"confirme",l:"✅ Confirmé",bg:"#d1fae5",tx:"#065f46"},
  {v:"refuse",l:"❌ Non retenu",bg:"#fee2e2",tx:"#991b1b"},
  {v:"en_cours",l:"⏳ En traitement",bg:"#f3f4f6",tx:"#374151"}
];

var ecoles=[], etus=[];
var selEcoleId=null, selEtuId=null, selCandId=null, addingEcole=false, addingCand=false;

function uid(){return Math.random().toString(36).slice(2,9);}

/* ── Storage ── */
function save(){
  try{ localStorage.setItem("dc_admin_ecoles", JSON.stringify(ecoles)); }catch(e){}
  try{ localStorage.setItem("dc_admin_etus", JSON.stringify(etus)); }catch(e){}
}
function load(){
  try{ var a=localStorage.getItem("dc_admin_ecoles"); ecoles = a?JSON.parse(a):JSON.parse(JSON.stringify(DEFAULT_ECOLES)); }catch(e){ ecoles=JSON.parse(JSON.stringify(DEFAULT_ECOLES)); }
  try{ var b=localStorage.getItem("dc_admin_etus"); etus = b?JSON.parse(b):JSON.parse(JSON.stringify(DEFAULT_ETUS)); }catch(e){ etus=JSON.parse(JSON.stringify(DEFAULT_ETUS)); }
  if(etus[0]) selEtuId=etus[0].id;
}

/* ── Toast ── */
function toast(msg,err){
  var t=document.getElementById("toast");
  t.textContent=msg; t.className="toast show"+(err?" err":"");
  setTimeout(function(){t.className="toast";},2500);
}

/* ── Dark mode ── */
function initDark(){
  var th=localStorage.getItem("dc_admin_theme")||"light";
  document.documentElement.setAttribute("data-theme",th);
  var b=document.getElementById("darkToggle"); if(b)b.textContent=th==="dark"?"☀️":"🌙";
}
function toggleDark(){
  var cur=document.documentElement.getAttribute("data-theme");
  var nx=cur==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",nx);
  localStorage.setItem("dc_admin_theme",nx);
  document.getElementById("darkToggle").textContent=nx==="dark"?"☀️":"🌙";
}

/* ── Login ── */
function doLogin(){
  var pwd=document.getElementById("admin-pwd").value;
  if(pwd===ADMIN_PASSWORD){
    sessionStorage.setItem("dc_admin_auth","1");
    showApp();
  } else {
    document.getElementById("admin-login-error").textContent="❌ Mot de passe incorrect.";
  }
}
function showApp(){
  document.getElementById("login-screen").style.display="none";
  document.getElementById("admin-app").style.display="block";
  load();
  initDark();
  renderDash(); renderEcoleList(); buildCatFilter();
}
function logout(){
  sessionStorage.removeItem("dc_admin_auth");
  location.reload();
}

/* ── Tabs ── */
function switchTab(tab){
  var secs=document.querySelectorAll(".section");
  for(var i=0;i<secs.length;i++) secs[i].classList.remove("active");
  document.getElementById("sec-"+tab).classList.add("active");
  var btns=document.querySelectorAll(".tab-btn");
  for(var j=0;j<btns.length;j++) btns[j].classList.remove("active");
  document.querySelector('.tab-btn[data-tab="'+tab+'"]').classList.add("active");
  if(tab==="dashboard") renderDash();
  if(tab==="ecoles") renderEcoleList();
  if(tab==="etudiants") renderEtuList();
}

/* ── École status ── */
function ecoSt(ec){
  var t=new Date();t.setHours(0,0,0,0);
  if(ec.clo){var c=new Date(ec.clo);if(t>c)return{l:"Fermée",bg:"#fee2e2",tx:"#991b1b"};var d=Math.round((c-t)/86400000);if(d<=7)return{l:d+"j",bg:"#fef3c7",tx:"#92400e"};}
  if(ec.ouv&&t<new Date(ec.ouv))return{l:"À venir",bg:"#dbeafe",tx:"#1e40af"};
  if(!ec.ouv&&!ec.clo)return{l:"Att.",bg:"#f3f4f6",tx:"#374151"};
  return{l:"Ouverte",bg:"#d1fae5",tx:"#065f46"};
}
function stInfo(v){for(var i=0;i<STLIST.length;i++)if(STLIST[i].v===v)return STLIST[i];return STLIST[STLIST.length-1];}
function lv(v){return v===true?"✅":v===false?"❌":"—";}

/* ── Dashboard ── */
function renderDash(){
  var today=new Date();today.setHours(0,0,0,0);
  var open=0,tc=0;
  for(var i=0;i<ecoles.length;i++){if(ecoles[i].clo&&today<=new Date(ecoles[i].clo))open++;}
  for(var k=0;k<etus.length;k++){tc+=(etus[k].candidatures||[]).length;}
  document.getElementById("st-ecoles").textContent=ecoles.length;
  document.getElementById("st-open").textContent=open;
  document.getElementById("st-etus").textContent=etus.length;
  document.getElementById("st-cands").textContent=tc;
  var soon=[];
  for(var m=0;m<ecoles.length;m++){
    var ec=ecoles[m];
    if(ec.clo){var dd=Math.round((new Date(ec.clo)-today)/86400000);if(dd>=0&&dd<=30)soon.push({ec:ec,d:dd});}
  }
  soon.sort(function(a,b){return a.d-b.d;});
  var html="";
  if(!soon.length){html='<div style="font-size:12px;color:var(--muted);">Aucune clôture imminente.</div>';}
  else{
    for(var n=0;n<soon.length;n++){
      var s=ecoSt(soon[n].ec);
      html+='<div class="soon-row"><span class="pill" style="background:'+s.bg+';color:'+s.tx+';min-width:50px;text-align:center;">'+soon[n].d+'j</span><span style="font-size:12px;flex:1;">'+soon[n].ec.nom+'</span><span style="font-size:11px;color:var(--muted);">'+soon[n].ec.clo+'</span></div>';
    }
  }
  document.getElementById("soon-list").innerHTML=html;
}

/* ── Catégorie filter ── */
function buildCatFilter(){
  var sel=document.getElementById("cat-filter");
  var h='<option value="">Toutes les filières</option>';
  for(var i=0;i<CATS.length;i++)h+='<option value="'+CATS[i]+'">'+CATS[i]+'</option>';
  sel.innerHTML=h;
}

/* ── Écoles list ── */
function renderEcoleList(){
  var q=(document.getElementById("ecole-search").value||"").toLowerCase();
  var cf=document.getElementById("cat-filter").value;
  var html="",count=0;
  for(var i=0;i<ecoles.length;i++){
    var ec=ecoles[i];
    if(q && ec.nom.toLowerCase().indexOf(q)<0 && (ec.villes||"").toLowerCase().indexOf(q)<0) continue;
    if(cf && ec.cat!==cf) continue;
    count++;
    var st=ecoSt(ec);
    html+='<div class="li '+(selEcoleId===ec.id?"sel":"")+'" onclick="pickEcole(\''+ec.id+'\')"><div class="li-name">'+ec.nom+'</div><div class="li-sub"><span>'+ec.cat+'</span><span class="pill" style="background:'+st.bg+';color:'+st.tx+';">'+st.l+'</span></div></div>';
  }
  document.getElementById("ecole-list").innerHTML=html;
  document.getElementById("ecole-count").textContent=count+"/"+ecoles.length+" écoles";
}
function pickEcole(id){
  selEcoleId=id;addingEcole=false;
  var ec=null;for(var i=0;i<ecoles.length;i++)if(ecoles[i].id===id)ec=ecoles[i];
  renderEcoleList();renderEcoleForm(ec,false);
}
function newEcole(){
  selEcoleId=null;addingEcole=true;
  renderEcoleList();
  renderEcoleForm({id:uid(),nom:"",cat:"Médecine & Santé",villes:"",ouv:"",clo:"",lien:"",modalite:"",concours:"",avis:"",note:""},true);
}
function renderEcoleForm(ec,isNew){
  var catOpts="";for(var i=0;i<CATS.length;i++)catOpts+='<option value="'+CATS[i]+'"'+(ec.cat===CATS[i]?" selected":"")+'>'+CATS[i]+'</option>';
  var h='<div class="form-head"><div class="form-title">'+(isNew?"Nouvelle école":"Modifier l\'école")+'</div><div class="row-btns">';
  if(!isNew)h+='<button class="btn-d" onclick="delEcole(\''+ec.id+'\')">🗑 Supprimer</button>';
  h+='<button class="btn-p" onclick="saveEcole(\''+ec.id+'\','+isNew+')">💾 Sauvegarder</button></div></div>';
  h+='<div class="g2">';
  h+='<div class="fld" style="grid-column:1/-1;"><label class="lbl">Nom de l\'établissement *</label><input id="ef-nom" value="'+esc(ec.nom)+'"></div>';
  h+='<div class="fld"><label class="lbl">Catégorie</label><select id="ef-cat">'+catOpts+'</select></div>';
  h+='<div class="fld"><label class="lbl">Villes (séparées par virgule)</label><input id="ef-villes" value="'+esc(ec.villes)+'"></div>';
  h+='<div class="fld"><label class="lbl">Date d\'ouverture</label><input type="date" id="ef-ouv" value="'+(ec.ouv||"")+'"></div>';
  h+='<div class="fld"><label class="lbl">Date de clôture</label><input type="date" id="ef-clo" value="'+(ec.clo||"")+'"></div>';
  h+='<div class="fld" style="grid-column:1/-1;"><label class="lbl">Lien officiel</label><input id="ef-lien" value="'+esc(ec.lien)+'" placeholder="https://"></div>';
  h+='<div class="fld"><label class="lbl">Modalité</label><input id="ef-modalite" value="'+esc(ec.modalite)+'"></div>';
  h+='<div class="fld"><label class="lbl">Concours</label><input id="ef-concours" value="'+esc(ec.concours)+'"></div>';
  h+='<div class="fld"><label class="lbl">Fichier avis (ex: avis/nom.pdf)</label><input id="ef-avis" value="'+esc(ec.avis)+'"></div>';
  h+='<div class="fld" style="grid-column:1/-1;"><label class="lbl">Note / Remarque</label><textarea id="ef-note" style="height:70px;">'+esc(ec.note)+'</textarea></div>';
  h+='</div>';
  document.getElementById("ecole-form").innerHTML=h;
}
function saveEcole(id,isNew){
  var nom=document.getElementById("ef-nom").value.trim();
  if(!nom){toast("Le nom est obligatoire",true);return;}
  var obj={id:id,nom:nom,cat:val("ef-cat"),villes:val("ef-villes"),ouv:val("ef-ouv"),clo:val("ef-clo"),lien:val("ef-lien"),modalite:val("ef-modalite"),concours:val("ef-concours"),avis:val("ef-avis"),note:val("ef-note")};
  if(isNew){ecoles.push(obj);}else{for(var i=0;i<ecoles.length;i++)if(ecoles[i].id===id)ecoles[i]=obj;}
  selEcoleId=id;addingEcole=false;save();renderEcoleList();renderEcoleForm(obj,false);
  toast(isNew?"École ajoutée ✅":"École sauvegardée ✅");
}
function delEcole(id){
  if(!confirm("Supprimer cette école ?"))return;
  ecoles=ecoles.filter(function(e){return e.id!==id;});
  selEcoleId=null;save();renderEcoleList();
  document.getElementById("ecole-form").innerHTML='<div class="placeholder"><div class="placeholder-icon">🏫</div><div>Sélectionnez une école ou cliquez "+ Ajouter"</div></div>';
  toast("École supprimée",true);
}

/* ── Étudiants ── */
function renderEtuList(){
  var html="";
  for(var i=0;i<etus.length;i++){
    var et=etus[i];
    html+='<div class="li '+(selEtuId===et.id?"sel":"")+'" onclick="pickEtu(\''+et.id+'\')"><div class="li-name">'+(et.prenom||"")+' '+(et.nom||"")+'</div><div class="li-sub">'+(et.candidatures||[]).length+' candidature(s)</div></div>';
  }
  document.getElementById("etu-list").innerHTML=html;
  if(selEtuId) renderEtuDetail();
}
function pickEtu(id){selEtuId=id;selCandId=null;addingCand=false;renderEtuList();}
function newEtudiant(){
  var n={id:uid(),identifiant:"",mot_de_passe:"",nom:"",prenom:"Nouvel étudiant",photo:"photos/.jpg",photo_b64:"",cin:"",cne:"",email:"",date_naissance:"",telephone:"",ville:"",serie_bac:"",academie:"",annee_bac:2026,notes:{an1_s1:null,an1_s2:null,moy_an1:null,moy_regional:null,an2_s1:null,an2_s2:null,moy_an2:null,moy_nationale:null,moy_gen_bac:null},remarque_conseiller:"Dossier suivi par M. Mustapha Abounaim — Conseiller d\'orientation · Casablanca",candidatures:[]};
  etus.push(n);selEtuId=n.id;save();renderEtuList();
}
function delEtu(id){
  if(!confirm("Supprimer cet étudiant et toutes ses candidatures ?"))return;
  etus=etus.filter(function(e){return e.id!==id;});
  selEtuId=etus[0]?etus[0].id:null;save();renderEtuList();
  if(!selEtuId)document.getElementById("etu-detail").innerHTML='<div class="placeholder"><div class="placeholder-icon">👩‍🎓</div><div>Sélectionnez un étudiant</div></div>';
  toast("Étudiant supprimé",true);
}
function getEtu(){for(var i=0;i<etus.length;i++)if(etus[i].id===selEtuId)return etus[i];return null;}

function renderEtuDetail(){
  var et=getEtu();if(!et)return;
  var pf=[["prenom","Prénom"],["nom","Nom"],["identifiant","Identifiant (login)"],["mot_de_passe","Mot de passe"],["cin","CIN"],["cne","CNE"],["email","Email"],["date_naissance","Naissance (JJ/MM/AAAA)"],["telephone","Téléphone"],["ville","Ville"],["serie_bac","Série Bac"],["academie","Académie"],["photo","Photo (ex: photos/nom.jpg)"]];
  var h='<div style="padding:16px;border-bottom:1px solid var(--bord);">';
  h+='<div class="form-head"><div class="form-title">'+(et.prenom||"")+' '+(et.nom||"")+' — Profil</div>';
  if(etus.length>1)h+='<button class="btn-d" onclick="delEtu(\''+et.id+'\')">🗑 Supprimer l\'étudiant</button>';
  h+='</div>';
  h+='<div class="g3">';
  for(var i=0;i<pf.length;i++){
    h+='<div class="fld"><label class="lbl">'+pf[i][1]+'</label><input value="'+esc(et[pf[i][0]])+'" onchange="updEtu(\''+pf[i][0]+'\',this.value)"></div>';
  }
  h+='</div>';
  h+='<div class="lbl" style="margin:6px 0 8px;">Notes</div><div class="g4">';
  var nf=[["an1_s1","An1 S1"],["an1_s2","An1 S2"],["moy_an1","Moy An1"],["moy_regional","Régional"],["an2_s1","An2 S1"],["an2_s2","An2 S2"],["moy_an2","Moy An2 (CC)"],["moy_nationale","National"]];
  var nn=et.notes||{};
  for(var j=0;j<nf.length;j++){
    var nv=(nn[nf[j][0]]===null||nn[nf[j][0]]===undefined)?"":nn[nf[j][0]];
    h+='<div class="fld"><label class="lbl">'+nf[j][1]+'</label><input type="number" step="0.01" value="'+nv+'" onchange="updNote(\''+nf[j][0]+'\',this.value)"></div>';
  }
  var mgb=(nn.moy_gen_bac===null||nn.moy_gen_bac===undefined)?"—":nn.moy_gen_bac;
  h+='<div class="fld"><label class="lbl">Moy. Bac (auto)</label><input value="'+mgb+'" disabled style="font-weight:700;color:var(--g);"></div>';
  h+='</div>';
  h+='<div style="font-size:10px;color:var(--muted);font-style:italic;">Moy. Bac = 50% National + 25% Moy An2 + 25% Régional (calcul automatique)</div>';
  h+='<div class="fld" style="margin-top:10px;"><label class="lbl">Note du conseiller</label><textarea style="height:42px;" onchange="updEtu(\'remarque_conseiller\',this.value)">'+esc(et.remarque_conseiller)+'</textarea></div>';
  h+='</div>';

  /* Candidatures */
  h+='<div style="padding:16px;">';
  h+='<div class="form-head"><div class="form-title">Candidatures ('+(et.candidatures||[]).length+')</div><button class="btn-p" onclick="newCand()">+ Ajouter une candidature</button></div>';
  h+='<div style="overflow-x:auto;"><table class="cand-table"><thead><tr><th>École</th><th>Statut</th><th>Inscription</th><th>Concours</th><th>Princ.</th><th>A1</th><th>A2</th><th>A3</th><th>Actions</th></tr></thead><tbody>';
  var cs=et.candidatures||[];
  if(!cs.length){h+='<tr><td colspan="9" style="text-align:center;padding:18px;color:var(--light);">Aucune candidature</td></tr>';}
  for(var k=0;k<cs.length;k++){
    var c=cs[k],si=stInfo(c.statut);
    h+='<tr>';
    h+='<td><div style="font-weight:600;">'+c.ecole+'</div>'+(c.groupe?'<div style="font-size:9px;color:var(--muted);">'+c.groupe+'</div>':'')+'</td>';
    h+='<td><span class="statut-badge" style="background:'+si.bg+';color:'+si.tx+';">'+si.l+'</span></td>';
    h+='<td style="white-space:nowrap;">'+(c.date_inscription||"—")+'</td>';
    h+='<td style="white-space:nowrap;">'+(c.date_concours||"—")+'</td>';
    h+='<td style="text-align:center;">'+lv(c.liste_principale)+'</td>';
    h+='<td style="text-align:center;">'+lv(c.attente_1)+'</td>';
    h+='<td style="text-align:center;">'+lv(c.attente_2)+'</td>';
    h+='<td style="text-align:center;">'+lv(c.attente_3)+'</td>';
    h+='<td><div class="cand-actions"><button class="btn-s mini-btn" onclick="editCand(\''+c._id+'\')">✏️</button><button class="btn-d mini-btn" onclick="delCand(\''+c._id+'\')">🗑</button></div></td>';
    h+='</tr>';
  }
  h+='</tbody></table></div>';
  if(selCandId||addingCand) h+=renderCandForm(et);
  h+='</div>';
  document.getElementById("etu-detail").innerHTML=h;
}

function updEtu(field,v){var et=getEtu();if(!et)return;et[field]=v;save();
  if(field==="prenom"||field==="nom")renderEtuList();}
function updNote(key,v){
  var et=getEtu();if(!et)return;
  if(!et.notes)et.notes={};
  et.notes[key]=(v===""?null:parseFloat(v));
  var n=et.notes,nat=parseFloat(n.moy_nationale),cc2=parseFloat(n.moy_an2),reg=parseFloat(n.moy_regional);
  if(!isNaN(nat)&&!isNaN(cc2)&&!isNaN(reg)){n.moy_gen_bac=Math.round((0.5*nat+0.25*cc2+0.25*reg)*100)/100;}
  save();renderEtuDetail();
}

function renderCandForm(et){
  var c;
  if(addingCand){c={_id:"__new",ecole:"",groupe:"",ville:"",lien:"",num_dossier:"",date_inscription:"",date_concours:"",date_resultats:"",statut:"inscrit",liste_principale:null,attente_1:null,attente_2:null,attente_3:null,note_conseiller:"",portail_id:"",portail_mdp:"",recu_lien:""};}
  else{c=null;for(var i=0;i<et.candidatures.length;i++)if(et.candidatures[i]._id===selCandId)c=et.candidatures[i];if(!c)return"";}
  var stOpts="";for(var s=0;s<STLIST.length;s++)stOpts+='<option value="'+STLIST[s].v+'"'+(c.statut===STLIST[s].v?" selected":"")+'>'+STLIST[s].l+'</option>';
  function boolSel(k){var v=c[k];return '<option value="null"'+(v===null||v===undefined?" selected":"")+'>— En attente</option><option value="true"'+(v===true?" selected":"")+'>✅ Oui</option><option value="false"'+(v===false?" selected":"")+'>❌ Non</option>';}
  var h='<div class="sub-form">';
  h+='<div class="form-head"><div class="form-title" style="font-size:13px;">'+(addingCand?"Nouvelle candidature":"Modifier la candidature")+'</div><div class="row-btns"><button class="btn-s" onclick="cancelCand()">Annuler</button><button class="btn-p" onclick="saveCand(\''+c._id+'\','+addingCand+')">💾 Sauvegarder</button></div></div>';
  h+='<div class="g3">';
  h+='<div class="fld" style="grid-column:1/-1;"><label class="lbl">École / Programme *</label><input id="cf-ecole" value="'+esc(c.ecole)+'"></div>';
  h+='<div class="fld"><label class="lbl">Groupe</label><input id="cf-groupe" value="'+esc(c.groupe)+'"></div>';
  h+='<div class="fld"><label class="lbl">Ville</label><input id="cf-ville" value="'+esc(c.ville)+'"></div>';
  h+='<div class="fld"><label class="lbl">N° Dossier</label><input id="cf-dossier" value="'+esc(c.num_dossier)+'"></div>';
  h+='<div class="fld"><label class="lbl">Date inscription</label><input type="date" id="cf-insc" value="'+(c.date_inscription||"")+'"></div>';
  h+='<div class="fld"><label class="lbl">Date concours</label><input type="date" id="cf-conc" value="'+(c.date_concours||"")+'"></div>';
  h+='<div class="fld"><label class="lbl">Date résultats</label><input type="date" id="cf-res" value="'+(c.date_resultats||"")+'"></div>';
  h+='<div class="fld"><label class="lbl">Statut</label><select id="cf-statut">'+stOpts+'</select></div>';
  h+='<div class="fld"><label class="lbl">Lien officiel</label><input id="cf-lien" value="'+esc(c.lien)+'"></div>';
  h+='<div class="fld"><label class="lbl">Liste principale</label><select id="cf-lp">'+boolSel("liste_principale")+'</select></div>';
  h+='<div class="fld"><label class="lbl">1ère attente</label><select id="cf-a1">'+boolSel("attente_1")+'</select></div>';
  h+='<div class="fld"><label class="lbl">2ème attente</label><select id="cf-a2">'+boolSel("attente_2")+'</select></div>';
  h+='<div class="fld"><label class="lbl">3ème attente</label><select id="cf-a3">'+boolSel("attente_3")+'</select></div>';
  h+='<div class="fld"><label class="lbl">Identifiant portail école</label><input id="cf-pid" value="'+esc(c.portail_id)+'"></div>';
  h+='<div class="fld"><label class="lbl">Mot de passe portail</label><input id="cf-pmdp" value="'+esc(c.portail_mdp)+'"></div>';
  h+='<div class="fld"><label class="lbl">Reçu (ex: recus/nom.pdf)</label><input id="cf-recu" value="'+esc(c.recu_lien)+'"></div>';
  h+='<div class="fld" style="grid-column:1/-1;"><label class="lbl">Note conseiller</label><textarea id="cf-note" style="height:44px;">'+esc(c.note_conseiller)+'</textarea></div>';
  h+='</div></div>';
  return h;
}
function newCand(){selCandId=null;addingCand=true;renderEtuDetail();}
function editCand(cid){selCandId=cid;addingCand=false;renderEtuDetail();}
function cancelCand(){selCandId=null;addingCand=false;renderEtuDetail();}
function boolVal(id){var v=document.getElementById(id).value;return v==="null"?null:(v==="true");}
function saveCand(cid,isNew){
  var et=getEtu();if(!et)return;
  var ecole=document.getElementById("cf-ecole").value.trim();
  if(!ecole){toast("Le nom de l\'école est obligatoire",true);return;}
  var obj={_id:isNew?uid():cid,ecole:ecole,groupe:val("cf-groupe"),ville:val("cf-ville"),lien:val("cf-lien"),num_dossier:val("cf-dossier"),date_inscription:val("cf-insc"),date_concours:val("cf-conc"),date_resultats:val("cf-res"),statut:val("cf-statut"),liste_principale:boolVal("cf-lp"),attente_1:boolVal("cf-a1"),attente_2:boolVal("cf-a2"),attente_3:boolVal("cf-a3"),note_conseiller:val("cf-note"),portail_id:val("cf-pid"),portail_mdp:val("cf-pmdp"),recu_lien:val("cf-recu")};
  if(!et.candidatures)et.candidatures=[];
  if(isNew){et.candidatures.push(obj);}else{for(var i=0;i<et.candidatures.length;i++)if(et.candidatures[i]._id===cid)et.candidatures[i]=obj;}
  selCandId=obj._id;addingCand=false;save();renderEtuList();renderEtuDetail();
  toast("Candidature sauvegardée ✅");
}
function delCand(cid){
  if(!confirm("Supprimer cette candidature ?"))return;
  var et=getEtu();if(!et)return;
  et.candidatures=et.candidatures.filter(function(c){return c._id!==cid;});
  selCandId=null;save();renderEtuList();renderEtuDetail();
  toast("Candidature supprimée",true);
}

/* ── Export ── */
function dl(data,name){
  var b=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  var u=URL.createObjectURL(b),a=document.createElement("a");
  a.href=u;a.download=name;a.click();URL.revokeObjectURL(u);
}
function exportEcoles(){
  var out=[];
  for(var i=0;i<ecoles.length;i++){
    var e=ecoles[i];
    out.push({nom:e.nom,cat:e.cat,villes:e.villes?e.villes.split(",").map(function(v){return v.trim();}):[],ouv:e.ouv||null,clo:e.clo||null,lien:e.lien||null,modalite:e.modalite||null,concours:e.concours||null,avis:e.avis||null,note:e.note||""});
  }
  dl(out,"ecoles_complet.json");toast("ecoles_complet.json téléchargé ✅");
}
function exportEtudiants(){
  var out=[];
  for(var i=0;i<etus.length;i++){
    var e=JSON.parse(JSON.stringify(etus[i]));
    delete e.id;
    var nn=e.notes||{};
    for(var key in nn){if(nn[key]==="")nn[key]=null;}
    var cands=e.candidatures||[];
    for(var c=0;c<cands.length;c++){
      delete cands[c]._id;
      var fields=["num_dossier","date_inscription","date_concours","date_resultats","note_conseiller"];
      for(var f=0;f<fields.length;f++){if(cands[c][fields[f]]==="")cands[c][fields[f]]=null;}
    }
    out.push(e);
  }
  dl(out,"etudiants.json");toast("etudiants.json téléchargé ✅");
}
function importEcoles(ev){
  var f=ev.target.files[0];if(!f)return;
  var r=new FileReader();
  r.onload=function(){
    try{
      var arr=JSON.parse(r.result);
      for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i].villes))arr[i].villes=arr[i].villes.join(", ");
        arr[i].id=uid();
      }
      ecoles=arr;save();renderEcoleList();renderDash();
      toast(arr.length+" écoles importées ✅");
    }catch(e){toast("Fichier invalide",true);}
  };
  r.readAsText(f);
}
function importEtus(ev){
  var f=ev.target.files[0];if(!f)return;
  var r=new FileReader();
  r.onload=function(){
    try{
      var arr=JSON.parse(r.result);
      for(var i=0;i<arr.length;i++){
        arr[i].id=arr[i].id||uid();
        var cands=arr[i].candidatures||[];
        for(var c=0;c<cands.length;c++)cands[c]._id=uid();
      }
      etus=arr;selEtuId=etus[0]?etus[0].id:null;
      save();renderEtuList();renderDash();
      toast(arr.length+" étudiants importés ✅");
    }catch(e){toast("Fichier invalide",true);}
  };
  r.readAsText(f);
}

/* ── Helpers ── */
function val(id){var el=document.getElementById(id);return el?el.value:"";}
function esc(s){if(s===null||s===undefined)return"";return String(s).replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

/* ── Init ── */
document.addEventListener("DOMContentLoaded",function(){
  initDark();
  if(sessionStorage.getItem("dc_admin_auth")==="1"){showApp();}
  document.getElementById("admin-login-btn").addEventListener("click",doLogin);
  document.getElementById("admin-pwd").addEventListener("keydown",function(e){if(e.key==="Enter")doLogin();});
  document.getElementById("darkToggle").addEventListener("click",toggleDark);
  document.getElementById("admin-logout").addEventListener("click",logout);
  var tabs=document.querySelectorAll(".tab-btn");
  for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(){switchTab(this.getAttribute("data-tab"));});
  }
});

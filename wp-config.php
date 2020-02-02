<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'mysql' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'JV^!=<8rV5v]*^x~Zx99mnd(75Yb(/R_LUHl59*lRK22n):1r%;(!vHvK+W*f)0!' );
define( 'SECURE_AUTH_KEY',  'L3gNNslb3lL@w(xA,F~8V#^]8B}LANB@S4qovN6U1a`^FxfQ1gE@&`6#+4 <./D~' );
define( 'LOGGED_IN_KEY',    '}Z3~H@?^I;R2<@W`.w_X11HeFIE[-n;bMI4,j}SPW<Cu)>y`s2? +Yh~&RHo>=$?' );
define( 'NONCE_KEY',        'W3=-cr;t*{O55$Wggm.P;l!H6lGCjju}g^2;#v4&yG0Ho7%iy8,N5jQADn%c/FK9' );
define( 'AUTH_SALT',        '4Sz47ZrR)R!TTCbEs4?(*5E:~4;gca%Lp7{d$shI_cPz,3l^<;j~L3GQ*V|<_Mqh' );
define( 'SECURE_AUTH_SALT', '?O!Ch5^p`ac4&m.P;Dg&{Okw`w;p:cc,v5JQ_yaM;X:2/=Y#k6gF0dgYG^_$ 5Dm' );
define( 'LOGGED_IN_SALT',   '1(d_o![v)$~@mnQ%[if21:v<i c:ZH`0T{ydwzNjciD{$6fk_;k=-[pxF^%[jv:j' );
define( 'NONCE_SALT',       'KS@r/3o#BDAcdJ%$YbIInI%vb,uLghD]Mx>wyB]5ath`hVy{vD4^;wbASR>PRE_J' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');

<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u729862070_o6lw2' );

/** MySQL database username */
define( 'DB_USER', 'u729862070_XEZjM' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wuqBSYcLYp' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '9{g;r:,.^Dop=PS.hZNnsbTuBJV{V<4}g(YBNm%mWHHnrqqV%xJCI]%B#;Ukc//9' );
define( 'SECURE_AUTH_KEY',   'z)u~v8NzVdK%{MIqufa%y<eSJ)a1)W=^{*3L2m0i(&m;sg~.mA[RN+eS ru.G=5O' );
define( 'LOGGED_IN_KEY',     '(:?vKnoF};dgEk+Z J.q}D3EyX1!L27O,/yC>OW0Bn[XH{FE}d?hTa0a/6_E_T)M' );
define( 'NONCE_KEY',         'rmLl`,Bul6OiM(#?-G)j9CqTjJ3pviY{/G/FGFo%F]??V(OTb/y:xT(w6Y(}F+D)' );
define( 'AUTH_SALT',         'CA.UL[J=~r_8V4?,yc-7HGSsf;=>?77%vw:f{ l9hOn2TSFm_Zow39.,4{NDY^87' );
define( 'SECURE_AUTH_SALT',  'kX&lLgIyuteI-%9ciEy[WaNwo(Dxfdw^?;mI)]LdIgo35Bv!O$)i((<V@OAC Q4(' );
define( 'LOGGED_IN_SALT',    '.z4@_E>D$Nr1!8[ VA_!;QYhe{2:!9IKOR(yW*))y.5s:P#mG<).lp`e!~[gb~bO' );
define( 'NONCE_SALT',        'oVc;cF5raa.x6Z(rY*MpJ>P|g+=x-P8k$DtZ_q(C[@CWMx+r1;8$JE=gxgT>Sovo' );
define( 'WP_CACHE_KEY_SALT', '5P_`&RXxa[[_%c8ay]Qsdd2RcMcHx,~P4.*$R8Iz&&n0<Cd]|<H@mkV$qACJ3;Ey' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

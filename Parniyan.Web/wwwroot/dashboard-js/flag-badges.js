(function($){
	var flags = [
		{ name:'Abkhazia', src: 'abk' },
		{ name:'Afghanistan', src: 'afg' },
		{ name:'Albania', src: 'alb' },
		{ name:'Algeria', src: 'alg' },
		{ name:'Andorra', src: 'and' },
		{ name:'Angola', src: 'ang' },
		{ name:'Antigua and Barbuda', src: 'ant' },
		{ name:'Argentina', src: 'arg' },
		{ name:'Armenia', src: 'arm' },
		{ name:'Australia', src: 'aus' },
		{ name:'Austria', src: 'atr' },
		{ name:'Azerbaijan', src: 'aze' },
		{ name:'Bahamas', src: 'bah' },
		{ name:'Bahrain', src: 'bhr' },
		{ name:'Bangladesh', src: 'ban' },
		{ name:'Barbados', src: 'bar' },
		{ name:'Belarus', src: 'bel' },
		{ name:'Belgium', src: 'blg' },
		{ name:'Belize', src: 'blz' },
		{ name:'Benin', src: 'ben' },
		{ name:'Bhutan', src: 'bhu' },
		{ name:'Bolivia', src: 'bol' },
		{ name:'BOSNIA AND HERZ', src: 'bos' },
		{ name:'Botswana', src: 'bot' },
		{ name:'Brazil', src: 'bra' },
		{ name:'Brunei', src: 'bru' },
		{ name:'Bulgaria', src: 'bul' },
		{ name:'Burkina Faso', src: 'bur' },
		{ name:'Burundi', src: 'bud' },
		{ name:'Cambodia', src: 'cbd' },
		{ name:'Cameroon', src: 'cam' },
		{ name:'Canada', src: 'can' },
		{ name:'Cape Verde', src: 'cpv' },
		{ name:'CENTRAL AFRI', src: 'car' },
		{ name:'Chad', src: 'cha' },
		{ name:'Chile', src: 'chi' },
		{ name:'China', src: 'chn' },
		{ name:'Colombia', src: 'col' },
		{ name:'Comoros', src: 'com' },
		{ name:'DEM. REPUBL', src: 'drc' },
		{ name:'Congo', src: 'cgo' },
		{ name:'Cook Islands', src: 'coi' },
		{ name:'Costa Rica', src: 'cor' },
		{ name:'Croatia', src: 'cro' },
		{ name:'Cuba', src: 'cub' },
		{ name:'Cyprus', src: 'cyp' },
		{ name:'Northern Cyprus', src: 'ncy' },
		{ name:'Czech Republic', src: 'cze' },
		{ name:'Denmark', src: 'den' },
		{ name:'Djibouti', src: 'dji' },
		{ name:'Dominica', src: 'dom' },
		{ name:'Dominican Republic', src: 'dor' },
		{ name:'Timor-Leste', src: 'til' },
		{ name:'Ecuador', src: 'ecu' },
		{ name:'Egypt', src: 'egy' },
		{ name:'El Salvador', src: 'els' },
		{ name:'Equatorial Guinea', src: 'eqg' },
		{ name:'Eritrea', src: 'eri' },
		{ name:'Estonia', src: 'est' },
		{ name:'Ethiopia', src: 'eth' },
		{ name:'Fiji', src: 'fij' },
		{ name:'Finland', src: 'fin' },
		{ name:'France', src: 'fra' },
		{ name:'Gabon', src: 'gab' },
		{ name:'Gambia', src: 'gam' },
		{ name:'Georgia', src: 'geo' },
		{ name:'Germany', src: 'ger' },
		{ name:'Ghana', src: 'gha' },
		{ name:'Greece', src: 'gre' },
		{ name:'Grenada', src: 'grn' },
		{ name:'Guatemala', src: 'gua' },
		{ name:'Guinea', src: 'gui' },
		{ name:'Guinea-Bissau', src: 'gub' },
		{ name:'Guyana', src: 'guy' },
		{ name:'Haiti', src: 'hai' },
		{ name:'Honduras', src: 'hon' },
		{ name:'Hungary', src: 'hun' },
		{ name:'Iceland', src: 'ice' },
		{ name:'India', src: 'ind' },
		{ name:'Indonesia', src: 'ido' },
		{ name:'Iran', src: 'ira' },
		{ name:'Irak', src: 'irk' },
		{ name:'Ireland', src: 'ire' },
		{ name:'Israel', src: 'isr' },
		{ name:'Italy', src: 'ita' },
		{ name:'Ivory Coast', src: 'ivc' },
		{ name:'Jamaica', src: 'jam' },
		{ name:'Japan', src: 'jap' },
		{ name:'Jordan', src: 'jor' },
		{ name:'Kazakhstan', src: 'kaz' },
		{ name:'Kenya', src: 'ken' },
		{ name:'Kiribati', src: 'kir' },
		{ name:'North Korea', src: 'nko' },
		{ name:'South Korea', src: 'sko' },
		{ name:'Kosovo', src: 'kos' },
		{ name:'Kuwait', src: 'kwt' },
		{ name:'Kyrgyzstan', src: 'kyr' },
		{ name:'Laos', src: 'lao' },
		{ name:'Latvia', src: 'lat' },
		{ name:'Lebanon', src: 'leb' },
		{ name:'Lesotho', src: 'les' },
		{ name:'Liberia', src: 'lib' },
		{ name:'Libya', src: 'lby' },
		{ name:'Liechtenstein', src: 'lie' },
		{ name:'Lithuania', src: 'arg' },
		{ name:'Luxembourg', src: 'arm' },
		{ name:'Macedonia', src: 'mac' },
		{ name:'Madagascar', src: 'mad' },
		{ name:'Malawi', src: 'mal' },
		{ name:'Malaysia', src: 'mls' },
		{ name:'Maldives', src: 'mld' },
		{ name:'Mali', src: 'mli' },
		{ name:'Malta', src: 'mlt' },
		{ name:'Marshal Islands', src: 'msi' },
		{ name:'Mauritania', src: 'mau' },
		{ name:'Mauritius', src: 'mur' },
		{ name:'Mexico', src: 'mex' },
		{ name:'F.S. Micronesia', src: 'mic' },
		{ name:'Moldova', src: 'mol' },
		{ name:'Monaco', src: 'mon' },
		{ name:'Mongolia', src: 'mng' },
		{ name:'Montenegro', src: 'mnt' },
		{ name:'Morocco', src: 'mor' },
		{ name:'Mozambique', src: 'moz' },
		{ name:'Myanmar', src: 'mya' },
		{ name:'NAGorno-Karabakh', src: 'nak' },
		{ name:'Namibia', src: 'nam' },
		{ name:'Nauru', src: 'nau' },
		{ name:'Nepal', src: 'nep' },
		{ name:'Netherlands', src: 'net' },
		{ name:'New Zealand', src: 'nze' },
		{ name:'Nicaragua', src: 'nic' },
		{ name:'Niger', src: 'nir' },
		{ name:'Nigeria', src: 'nig' },
		{ name:'Niue', src: 'niu' },
		{ name:'Norway', src: 'nor' },
		{ name:'Oman', src: 'oma' },
		{ name:'Pakistan', src: 'pak' },
		{ name:'Palau', src: 'pal' },
		{ name:'State of Palestine', src: 'ple' },
		{ name:'Panama', src: 'pan' },
		{ name:'Papua New Guinea', src: 'pap' },
		{ name:'Paraguay', src: 'par' },
		{ name:'Peru', src: 'per' },
		{ name:'Philippines', src: 'phi' },
		{ name:'Poland', src: 'pol' },
		{ name:'Portugal', src: 'por' },
		{ name:'Qatar', src: 'qat' },
		{ name:'Romania', src: 'rom' },
		{ name:'Russia', src: 'rus' },
		{ name:'Rwanda', src: 'rwa' },
		{ name:'Sahrawi ARAB.', src: 'sah' },
		{ name:'Saint Kitts and Nevis', src: 'skn' },
		{ name:'Saint Lucia', src: 'slu' },
		{ name:'ST VINCENT', src: 'svg' },
		{ name:'Samoa', src: 'sam' },
		{ name:'San Marino', src: 'sma' },
		{ name:'SAO TOME', src: 'stp' },
		{ name:'Saudi Arabia', src: 'sar' },
		{ name:'Senegal', src: 'sen' },
		{ name:'Serbia', src: 'srb' },
		{ name:'Seychelles', src: 'sey' },
		{ name:'Sierra Leone', src: 'sle' },
		{ name:'Singapore', src: 'sgp' },
		{ name:'Slovakia', src: 'slo' },
		{ name:'Slovenia', src: 'svn' },
		{ name:'Solomon Islands', src: 'sis' },
		{ name:'Somalia', src: 'som' },
		{ name:'Somaliland', src: 'sml' },
		{ name:'South Africa', src: 'saf' },
		{ name:'South Ossetia', src: 'sos' },
		{ name:'South Sudan', src: 'ssu' },
		{ name:'Spain', src: 'spa' },
		{ name:'Sri Lanka', src: 'sri' },
		{ name:'Sudan', src: 'sud' },
		{ name:'Suriname', src: 'sur' },
		{ name:'Swaziland', src: 'swa' },
		{ name:'Sweden', src: 'swe' },
		{ name:'Switzerland', src: 'swi' },
		{ name:'Syria', src: 'syr' },
		{ name:'Taiwan', src: 'tai' },
		{ name:'Tajikistan', src: 'taj' },
		{ name:'Tanzania', src: 'tan' },
		{ name:'Thailand', src: 'tha' },
		{ name:'Togo', src: 'tog' },
		{ name:'Tonga', src: 'ton' },
		{ name:'Transnistria', src: 'tra' },
		{ name:'Trinidad and Tobago ', src: 'trt' },
		{ name:'Tunisia', src: 'tun' },
		{ name:'Turkey', src: 'tur' },
		{ name:'Turkmenistan', src: 'tkm' },
		{ name:'Tuvalu', src: 'tuv' },
		{ name:'Uganda', src: 'uga' },
		{ name:'Ukraine', src: 'ukr' },
		{ name:'United Arab Emirates', src: 'uae' },
		{ name:'United Kingdom', src: 'ukn' },
		{ name:'United States', src: 'usa' },
		{ name:'Uruguay', src: 'uru' },
		{ name:'Uzbekistan', src: 'uzb' },
		{ name:'Vanuatu', src: 'van' },
		{ name:'Vatican City', src: 'vat' },
		{ name:'Venezuela', src: 'ven' },
		{ name:'Vietnam', src: 'vie' },
		{ name:'Yemen', src: 'yem' },
		{ name:'Zambia', src: 'zam' },
		{ name:'Zimbabwe', src: 'zim' }
	];

	flags.forEach( function( flag ) {
		var badgeItem = '<!-- BADGES SHOWCASE ITEM --><div class="badges-showcase-item column"><figure class="badge big liquid"><img src="images/badges/flags/flag_'+flag.src+'.png" alt=""></figure><figure class="badge small liquid"><img src="images/badges/flags/flag_'+flag.src+'_s.png" alt=""></figure><p class="text-header">'+flag.name+'</p><p class="badge-description">Country of Location:<br>'+flag.name+'</p></div><!-- /BADGES SHOWCASE ITEM -->';

		$('.badges-showcase').append( badgeItem );
	});
})(jQuery);
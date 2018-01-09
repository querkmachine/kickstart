class Helper {
	/** 
	 * Quick and dirty random string generator.
	 * No guarantee of uniqueness.
	 */
	static RandomString() {
		return Math.random().toString(36).substring(6);
	}
}

Helper.Cookie = class {
	/**
	 * Cookie manipulation.
	 * Hat tip to jac. https://stackoverflow.com/a/5968306
	 */
	static Set(name, value, days) {
		const expiryDate = new Date(new Date().getTime() + (days * 24 * 60 * 60 * 1000));
		document.cookie = name + "=" + value + ";path=/;expires=" + expiryDate.toUTCString();
	}
	static Get(name) {
		const cookie = document.cookie;
		const prefix = `${name}=`;
		let begin = cookie.indexOf(`; ${prefix}`);
		let end;
		if (begin == -1) {
			begin = cookie.indexOf(prefix);
			if (begin != 0) {
				return null;
			}
		}
		else {
			begin += 2;
			end = document.cookie.indexOf(';', begin);
			if (end == -1) {
				end = cookie.length;
			}
		}
		return decodeURI(cookie.substring(begin + prefix.length, end));
	}
	static Destroy(name) {
		Helper.Cookie.Set(name, '', -1);
	}
};

Helper.Focus = class {
	/**
	 * Focus management. Moving and trapping.
	 * Hat tip to Hidde. https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
	 */
	static Move($element, goInside = false) {
		if (goInside) {
			$element.find('a, object, :input, iframe, [tabindex]').eq(0).trigger('focus');
		}
		else {
			$element.attr('tabindex', '0').on('focus', () => {
				$element.css({ 'outline': '0' });
			}).on('blur', () => {
				$element.removeAttr('tabindex').css({ 'outline': '' });
			}).trigger('focus');
		}
	}
	static Trap($element, namespace) {
		Helper.Focus.Release($element, namespace); // remove any existing focus trap
		const $focusableElements = $element.find('a, object, :input, iframe, [tabindex]');
		const firstFocusable = $focusableElements.first().get(0);
		const lastFocusable = $focusableElements.last().get(0);
		$element.on(`keydown.${namespace}`, (e) => {
			if (e.which !== 9) { return; }
			if (e.shiftKey) {
				if (document.activeElement === firstFocusable) {
					lastFocusable.focus();
					e.preventDefault();
				}
			}
			else {
				if (document.activeElement === lastFocusable) {
					firstFocusable.focus();
					e.preventDefault();
				}
			}
		});
	}
	static Release($element, namespace) {
		$element.off(`keydown.${namespace}`);
	}
};
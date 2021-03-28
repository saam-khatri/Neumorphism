	

	let range, s_first, s_last, p;
	range = document.getElementById('range');
	s_first = range.previousElementSibling;
	s_last = range.nextElementSibling;
	range.oninput = ()=>{
		const m = range.value;
		s_first.setAttribute('data-percent', m + '%');
		s_first.style.left = `calc(${m}% - ${m/2}px`;
		s_last.style.width = `calc(${m}% - ${m/2-2}px`;
	}
	
	let parent, thumb, percent;
	parent = document.querySelector('.custon-slider');
	thumb = parent.querySelector('.thumb');
	percent = parent.querySelector('.percent');

	

	thumb.onmousedown = ()=>{
		let leftPosi, minLeft, maxWidth, new_value;
		parent.onmousemove = e=>{
			leftPosi = e.clientX;
			minLeft = parent.offsetLeft;
			maxWidth = parent.offsetWidth;
			new_value = 0;

			if (leftPosi < minLeft)
			{
				new_value = '0%';
			}
			else if(leftPosi > minLeft + maxWidth)
			{
				new_value = '100%';
			}
			else
			{
				new_value = ((leftPosi - minLeft) / (maxWidth) * 100).toFixed(0) + '%';		
			}
			document.documentElement.style.setProperty('--value', new_value);
	    	percent.firstElementChild.textContent = new_value;
		}
	}
	parent.onmouseup = e=>{
		parent.onmousemove = e=>{};
		thumb.onmousemove = ()=>{};
	}